import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const join = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      return { success: false as const, reason: "already_exists" as const };
    }

    await ctx.db.insert("waitlist", {
      email: args.email,
      createdAt: Date.now(),
    });

    return { success: true as const };
  },
});

export const getCount = query({
  handler: async (ctx) => {
    const entries = await ctx.db.query("waitlist").collect();
    return entries.length;
  },
});

export const getAll = query({
  handler: async (ctx) => {
    const entries = await ctx.db.query("waitlist").order("desc").collect();
    return entries.map((e) => ({
      id: e._id,
      email: e.email,
      createdAt: e.createdAt,
    }));
  },
});

export const remove = mutation({
  args: { id: v.id("waitlist") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
