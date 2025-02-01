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
  "skn57fblxpzP3SocpzzzyKGgCZNQAJ14RKyk8RgvPk2hyQDKD8Q1BWanEh43d1WiNEGMc6OukZJuFSvN8DBOWBtOM4Em0ObRJPt2Irol4g79tcPGe5UwJKPbm0yblUbUMJ5jmATjb4tikDeT9uCcBHVOARgKjSCDqt9qoZqwzunfXvK2Agzc",
  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
