export interface Failure<FailureType> {
  type: FailureType;
  reason: string;
}
