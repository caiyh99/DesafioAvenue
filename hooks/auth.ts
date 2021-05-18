/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export default class AuthSingleton {
  private static instance: AuthSingleton;

  private _key: string | undefined;
  private _token: string | undefined;
  private _expiration: string | undefined;

  get key() {
    return this._key;
  }

  set key(value) {
    this._key = value;
  }

  get token() {
    return this._token;
  }

  set token(value) {
    this._token = value;
  }

  get expiration() {
    return this._expiration;
  }

  set expiration(value) {
    this._expiration = value;
  }

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor(key?: string, expiration?: string) {
    this.key = key;
    this.expiration = expiration;
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(key?: string, expiration?: string): AuthSingleton {
    if (!AuthSingleton.instance) {
      AuthSingleton.instance = new AuthSingleton(key, expiration);
    }

    return AuthSingleton.instance;
  }
}
