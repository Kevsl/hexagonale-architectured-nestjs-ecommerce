export class CreateCategoryCommand {
  constructor(
    public readonly name: string,
    public readonly isActive: boolean,
  ) {}
}
