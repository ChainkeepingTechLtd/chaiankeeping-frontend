// Create a conditional type based on the environment
export type Environment = "STAGING" | "PRODUCTION"

// Type-safe way to get the current environment
export const getEnvironment = (): Environment => {
    return (process.env.NEXT_PUBLIC_ENVIRONMENT as Environment) || "PRODUCTION"
}

// Export the current environment's schema and type
export const currentEnvironment = getEnvironment()