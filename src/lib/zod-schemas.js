import { z } from "zod"

export const passwordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  })

export const userSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  nickName: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
})

export const signUpSchema = z.intersection(passwordSchema, userSchema)

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean(),
})

export const manageProfileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  nickName: z.string().optional(),
  bio: z.string().optional(),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  email: z.string().email("Enter a valid email address"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
})

export const resetPasswordSchema = z.intersection(
  z.object({ oldPassword: z.string().min(1, "Enter your old password") }),
  passwordSchema
)

export const addLinkSchema = z.object({
  title: z.string().min(1, "Title is required"),
  textUrl: z.string().min(1, "URL is required"),
})

export const roomSchema = z.object({
  title: z.string().min(1, "Title is required"),
  about: z.string().min(1, "Description is required"),
  category: z.enum(["Music", "Entertainment", "Gaming", "Lifestyle"]),
  subCategory: z.enum([
    "Pop",
    "Rock",
    "Jazz",
    "Hip-Hop",
    "Classical",
    "Electronic",
    "Country",
    "Reggae",
  ]),
  language: z.enum(["English", "Spanish"]),
  age: z.enum(["all", "18+", "21+"]),
  type: z.enum(["Public", "Private"]),
  indexRoom: z.boolean(),
  allowEmbed: z.boolean(),
})

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  about: z.string().min(1, "Description is required"),
  type: z.enum(["Music", "Entertainment", "Gaming", "Lifestyle"]),
  price: z.number(),
  link: z.string().url("Enter a valid URL"),
})
