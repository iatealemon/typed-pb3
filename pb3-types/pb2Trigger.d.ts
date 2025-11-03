export {};

declare global {
    type pb2TriggerInstance = {
        (...args: unknown[]): unknown;
        enabled: 0 | 1;
        max_calls: number;
        fail_call_callback: null | pb2TriggerInstance;
        fail_call_callback_same_arguments: 0 | 1;
    };
}