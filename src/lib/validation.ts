import { z } from "zod";

const email = z
  .string()
  .trim()
  .min(1, "Work email is required")
  .max(254, "Email is too long")
  .email("Enter a valid work email");

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email,
  organisation: z.string().trim().max(160).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Subject is required").max(160),
  category: z.enum([
    "general",
    "project-discussion",
    "partnership",
    "careers",
    "other",
  ]),
  message: z.string().trim().min(10, "Please include a short message").max(4000),
  website: z.string().max(200).optional().or(z.literal("")),
});

export const rfqSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email,
  organisation: z.string().trim().min(2, "Organisation is required").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  industryOrService: z
    .string()
    .trim()
    .min(2, "Industry, service or product is required")
    .max(200),
  requirements: z
    .string()
    .trim()
    .min(10, "Please describe your requirements")
    .max(5000),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  schedule: z.string().trim().max(200).optional().or(z.literal("")),
  quantity: z.string().trim().max(120).optional().or(z.literal("")),
  context: z.string().trim().max(300).optional().or(z.literal("")),
  website: z.string().max(200).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type RfqInput = z.infer<typeof rfqSchema>;
