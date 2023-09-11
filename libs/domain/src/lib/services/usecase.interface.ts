export abstract class UsecaseI<PayloadI, ResultI> {
  abstract execute(payload: PayloadI): Promise<ResultI>
}
