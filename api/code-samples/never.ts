type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;


function logger(s: NetworkState): string // ❌ | undefined {
    switch (s.state) {
        case "failed":
            return `failed with code ${s.code}`;
        case "success":
            return "got response";
    }
}

function logger(s: NetworkState): string { // ✅
    switch (s.state) {
        case "failed":
            return `failed with code ${s.code}`;
        case "success":
            return "got response";
        default:
            throw new Error("Unexpected object: " + x); // 👍
    }
}

function logger(s: NetworkState): string {
    switch (s.state) {
        case "failed":
            return `failed with code ${s.code}`;
        case "success":
            return "got response";
        case "loading":
            return "waiting response";
        default:
            // // Argument of type 'NetworkLoadingState' is not assignable to parameter of type 'never'.
            return assertNever(s); // 🫶
    }
}


function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}