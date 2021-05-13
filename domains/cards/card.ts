export class Card {
  private _name!: string;
  private _desc!: string;
  private _pos!: string;
  private _due!: Date;
  private _dueComplete!: boolean;
  private _idMembers!: Array<string>;
  private _idLabels!: Array<string>;
  private _urlSource!: string;
  private _fileSource!: string;
  private _idCardSource!: string;
  private _keepFromSource!: string;
  private _address!: string;
  private _locationName!: string;
  private _coordinates!: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }

  get pos(): string {
    return this._pos;
  }

  set pos(value: string) {
    this._pos = value;
  }

  get due(): Date {
    return this._due;
  }

  set due(value: Date) {
    this._due = value;
  }

  get dueComplete(): boolean {
    return this._dueComplete;
  }

  set dueComplete(value: boolean) {
    this._dueComplete = value;
  }

  get idMembers(): Array<string> {
    return this._idMembers;
  }

  set idMembers(value: Array<string>) {
    this._idMembers = value;
  }

  get idLabels(): Array<string> {
    return this._idLabels;
  }

  set idLabels(value: Array<string>) {
    this._idLabels = value;
  }

  get urlSource(): string {
    return this._urlSource;
  }

  set urlSource(value: string) {
    this._urlSource = value;
  }

  get fileSource(): string {
    return this._fileSource;
  }

  set fileSource(value: string) {
    this._fileSource = value;
  }

  get idCardSource(): string {
    return this._idCardSource;
  }

  set idCardSource(value: string) {
    this._idCardSource = value;
  }

  get keepFromSource(): string {
    return this._keepFromSource;
  }

  set keepFromSource(value: string) {
    this._keepFromSource = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get locationName(): string {
    return this._locationName;
  }

  set locationName(value: string) {
    this._locationName = value;
  }

  get coordinates(): string {
    return this._coordinates;
  }

  set coordinates(value: string) {
    this._coordinates = value;
  }
}
