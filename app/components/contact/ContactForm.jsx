"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
  firstname: z
    .string()
    .min(5, "Lirstname must be at least 5 characters.")
    .max(32, "Lirstname title must be at most 32 characters."),
    lastname: z
    .string()
    .min(5, "Lastname must be at least 5 characters.")
    .max(32, "Lastname title must be at most 32 characters."),
    email: z
    .string()
    .min(5, "Email must be at least 5 characters.")
    .max(32, "Email title must be at most 32 characters."),
    phone: z
    .string()
    .min(5, "Phone no. must be at least 5 characters.")
    .max(32, "Phone no. must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
})

// type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  function onSubmit(data) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-muted p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
    })
  }

  return (
    <Card className="w-full sm:max-w-md">
      {/* <CardHeader>
        <CardTitle>Support</CardTitle>
        <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription>
      </CardHeader> */}

      <CardContent>
        <form
          id="form-rhf-demo"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup className="flex flex-col gap-3">
            <div className="flex gap-2">
              <Controller
              name="firstname"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="flex flex-col gap-1">
                  <FieldLabel htmlFor="title" className="text-[12px]">First Name</FieldLabel>
                  <Input
                    {...field}
                    id="firstname"
                    placeholder="First Name"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError className="text-[10px]">{fieldState.error?.message}</FieldError>
                </Field>
              )}
            />
            <Controller
              name="lastname"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="flex flex-col gap-1">
                  <FieldLabel htmlFor="title" className="text-[12px]">Last Name</FieldLabel>
                  <Input
                    {...field}
                    id="lastname"
                    placeholder="Last Name"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError className="text-[10px]">{fieldState.error?.message}</FieldError>
                </Field>
              )}
            />
            </div>

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="flex flex-col gap-1">
                  <FieldLabel htmlFor="title" className="text-[12px]">Email</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError className="text-[10px]">{fieldState.error?.message}</FieldError>
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="flex flex-col gap-1">
                  <FieldLabel htmlFor="title" className="text-[12px]">Phone Number</FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    type="number"
                    placeholder="Enter your phone no."
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError className="text-[10px]">{fieldState.error?.message}</FieldError>
                </Field>
              )}
            />

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="flex flex-col gap-1">
                  <FieldLabel htmlFor="description" className="text-[12px]">
                    Description
                  </FieldLabel>

                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="description"
                      rows={6}
                      className="resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText>
                        {field.value.length}/100
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  <FieldDescription>
                    Include steps to reproduce and expected behavior.
                  </FieldDescription>

                  <FieldError className="text-[10px]">{fieldState.error?.message}</FieldError>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => form.reset()}
        >
          Reset
        </Button>
        <Button type="submit" form="form-rhf-demo">
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}
