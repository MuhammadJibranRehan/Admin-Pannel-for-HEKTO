export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk9087hHPEQerL2hTfuWJTZT0S2z1AHTNl6prQdNsVOp5QJRn403KLL6YGGfph7rsGCFp8AfGXr0GdufK3uSqvNAU30xOzD8ePrEv5UtYEB7KJ7AZfbFp7wIJGKYNV9MJqLbIpaqNGOq3o3vQsKSpvY8Jh49M0hJ5L3Y1XPgUrDHHXGvvOFQ",
  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
