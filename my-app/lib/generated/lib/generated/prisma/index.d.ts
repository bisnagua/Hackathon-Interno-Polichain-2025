
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cofrinhos
 * 
 */
export type cofrinhos = $Result.DefaultSelection<Prisma.$cofrinhosPayload>
/**
 * Model curadores
 * 
 */
export type curadores = $Result.DefaultSelection<Prisma.$curadoresPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cofrinhos
 * const cofrinhos = await prisma.cofrinhos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cofrinhos
   * const cofrinhos = await prisma.cofrinhos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cofrinhos`: Exposes CRUD operations for the **cofrinhos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cofrinhos
    * const cofrinhos = await prisma.cofrinhos.findMany()
    * ```
    */
  get cofrinhos(): Prisma.cofrinhosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curadores`: Exposes CRUD operations for the **curadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curadores
    * const curadores = await prisma.curadores.findMany()
    * ```
    */
  get curadores(): Prisma.curadoresDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    cofrinhos: 'cofrinhos',
    curadores: 'curadores'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cofrinhos" | "curadores"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cofrinhos: {
        payload: Prisma.$cofrinhosPayload<ExtArgs>
        fields: Prisma.cofrinhosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cofrinhosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cofrinhosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload>
          }
          findFirst: {
            args: Prisma.cofrinhosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cofrinhosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload>
          }
          findMany: {
            args: Prisma.cofrinhosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload>[]
          }
          create: {
            args: Prisma.cofrinhosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload>
          }
          createMany: {
            args: Prisma.cofrinhosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cofrinhosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload>[]
          }
          delete: {
            args: Prisma.cofrinhosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload>
          }
          update: {
            args: Prisma.cofrinhosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload>
          }
          deleteMany: {
            args: Prisma.cofrinhosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cofrinhosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cofrinhosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload>[]
          }
          upsert: {
            args: Prisma.cofrinhosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cofrinhosPayload>
          }
          aggregate: {
            args: Prisma.CofrinhosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCofrinhos>
          }
          groupBy: {
            args: Prisma.cofrinhosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CofrinhosGroupByOutputType>[]
          }
          count: {
            args: Prisma.cofrinhosCountArgs<ExtArgs>
            result: $Utils.Optional<CofrinhosCountAggregateOutputType> | number
          }
        }
      }
      curadores: {
        payload: Prisma.$curadoresPayload<ExtArgs>
        fields: Prisma.curadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.curadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.curadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload>
          }
          findFirst: {
            args: Prisma.curadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.curadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload>
          }
          findMany: {
            args: Prisma.curadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload>[]
          }
          create: {
            args: Prisma.curadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload>
          }
          createMany: {
            args: Prisma.curadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.curadoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload>[]
          }
          delete: {
            args: Prisma.curadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload>
          }
          update: {
            args: Prisma.curadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload>
          }
          deleteMany: {
            args: Prisma.curadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.curadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.curadoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload>[]
          }
          upsert: {
            args: Prisma.curadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curadoresPayload>
          }
          aggregate: {
            args: Prisma.CuradoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuradores>
          }
          groupBy: {
            args: Prisma.curadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuradoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.curadoresCountArgs<ExtArgs>
            result: $Utils.Optional<CuradoresCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cofrinhos?: cofrinhosOmit
    curadores?: curadoresOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CofrinhosCountOutputType
   */

  export type CofrinhosCountOutputType = {
    curador: number
  }

  export type CofrinhosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curador?: boolean | CofrinhosCountOutputTypeCountCuradorArgs
  }

  // Custom InputTypes
  /**
   * CofrinhosCountOutputType without action
   */
  export type CofrinhosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CofrinhosCountOutputType
     */
    select?: CofrinhosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CofrinhosCountOutputType without action
   */
  export type CofrinhosCountOutputTypeCountCuradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: curadoresWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cofrinhos
   */

  export type AggregateCofrinhos = {
    _count: CofrinhosCountAggregateOutputType | null
    _avg: CofrinhosAvgAggregateOutputType | null
    _sum: CofrinhosSumAggregateOutputType | null
    _min: CofrinhosMinAggregateOutputType | null
    _max: CofrinhosMaxAggregateOutputType | null
  }

  export type CofrinhosAvgAggregateOutputType = {
    id: number | null
  }

  export type CofrinhosSumAggregateOutputType = {
    id: number | null
  }

  export type CofrinhosMinAggregateOutputType = {
    id: number | null
    address: string | null
    owner: string | null
    nome: string | null
  }

  export type CofrinhosMaxAggregateOutputType = {
    id: number | null
    address: string | null
    owner: string | null
    nome: string | null
  }

  export type CofrinhosCountAggregateOutputType = {
    id: number
    address: number
    owner: number
    nome: number
    _all: number
  }


  export type CofrinhosAvgAggregateInputType = {
    id?: true
  }

  export type CofrinhosSumAggregateInputType = {
    id?: true
  }

  export type CofrinhosMinAggregateInputType = {
    id?: true
    address?: true
    owner?: true
    nome?: true
  }

  export type CofrinhosMaxAggregateInputType = {
    id?: true
    address?: true
    owner?: true
    nome?: true
  }

  export type CofrinhosCountAggregateInputType = {
    id?: true
    address?: true
    owner?: true
    nome?: true
    _all?: true
  }

  export type CofrinhosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cofrinhos to aggregate.
     */
    where?: cofrinhosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cofrinhos to fetch.
     */
    orderBy?: cofrinhosOrderByWithRelationInput | cofrinhosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cofrinhosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cofrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cofrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cofrinhos
    **/
    _count?: true | CofrinhosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CofrinhosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CofrinhosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CofrinhosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CofrinhosMaxAggregateInputType
  }

  export type GetCofrinhosAggregateType<T extends CofrinhosAggregateArgs> = {
        [P in keyof T & keyof AggregateCofrinhos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCofrinhos[P]>
      : GetScalarType<T[P], AggregateCofrinhos[P]>
  }




  export type cofrinhosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cofrinhosWhereInput
    orderBy?: cofrinhosOrderByWithAggregationInput | cofrinhosOrderByWithAggregationInput[]
    by: CofrinhosScalarFieldEnum[] | CofrinhosScalarFieldEnum
    having?: cofrinhosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CofrinhosCountAggregateInputType | true
    _avg?: CofrinhosAvgAggregateInputType
    _sum?: CofrinhosSumAggregateInputType
    _min?: CofrinhosMinAggregateInputType
    _max?: CofrinhosMaxAggregateInputType
  }

  export type CofrinhosGroupByOutputType = {
    id: number
    address: string
    owner: string
    nome: string
    _count: CofrinhosCountAggregateOutputType | null
    _avg: CofrinhosAvgAggregateOutputType | null
    _sum: CofrinhosSumAggregateOutputType | null
    _min: CofrinhosMinAggregateOutputType | null
    _max: CofrinhosMaxAggregateOutputType | null
  }

  type GetCofrinhosGroupByPayload<T extends cofrinhosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CofrinhosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CofrinhosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CofrinhosGroupByOutputType[P]>
            : GetScalarType<T[P], CofrinhosGroupByOutputType[P]>
        }
      >
    >


  export type cofrinhosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    owner?: boolean
    nome?: boolean
    curador?: boolean | cofrinhos$curadorArgs<ExtArgs>
    _count?: boolean | CofrinhosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cofrinhos"]>

  export type cofrinhosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    owner?: boolean
    nome?: boolean
  }, ExtArgs["result"]["cofrinhos"]>

  export type cofrinhosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    owner?: boolean
    nome?: boolean
  }, ExtArgs["result"]["cofrinhos"]>

  export type cofrinhosSelectScalar = {
    id?: boolean
    address?: boolean
    owner?: boolean
    nome?: boolean
  }

  export type cofrinhosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "owner" | "nome", ExtArgs["result"]["cofrinhos"]>
  export type cofrinhosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curador?: boolean | cofrinhos$curadorArgs<ExtArgs>
    _count?: boolean | CofrinhosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cofrinhosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cofrinhosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cofrinhosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cofrinhos"
    objects: {
      curador: Prisma.$curadoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      owner: string
      nome: string
    }, ExtArgs["result"]["cofrinhos"]>
    composites: {}
  }

  type cofrinhosGetPayload<S extends boolean | null | undefined | cofrinhosDefaultArgs> = $Result.GetResult<Prisma.$cofrinhosPayload, S>

  type cofrinhosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cofrinhosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CofrinhosCountAggregateInputType | true
    }

  export interface cofrinhosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cofrinhos'], meta: { name: 'cofrinhos' } }
    /**
     * Find zero or one Cofrinhos that matches the filter.
     * @param {cofrinhosFindUniqueArgs} args - Arguments to find a Cofrinhos
     * @example
     * // Get one Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cofrinhosFindUniqueArgs>(args: SelectSubset<T, cofrinhosFindUniqueArgs<ExtArgs>>): Prisma__cofrinhosClient<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cofrinhos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cofrinhosFindUniqueOrThrowArgs} args - Arguments to find a Cofrinhos
     * @example
     * // Get one Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cofrinhosFindUniqueOrThrowArgs>(args: SelectSubset<T, cofrinhosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cofrinhosClient<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cofrinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cofrinhosFindFirstArgs} args - Arguments to find a Cofrinhos
     * @example
     * // Get one Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cofrinhosFindFirstArgs>(args?: SelectSubset<T, cofrinhosFindFirstArgs<ExtArgs>>): Prisma__cofrinhosClient<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cofrinhos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cofrinhosFindFirstOrThrowArgs} args - Arguments to find a Cofrinhos
     * @example
     * // Get one Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cofrinhosFindFirstOrThrowArgs>(args?: SelectSubset<T, cofrinhosFindFirstOrThrowArgs<ExtArgs>>): Prisma__cofrinhosClient<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cofrinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cofrinhosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.findMany()
     * 
     * // Get first 10 Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cofrinhosWithIdOnly = await prisma.cofrinhos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cofrinhosFindManyArgs>(args?: SelectSubset<T, cofrinhosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cofrinhos.
     * @param {cofrinhosCreateArgs} args - Arguments to create a Cofrinhos.
     * @example
     * // Create one Cofrinhos
     * const Cofrinhos = await prisma.cofrinhos.create({
     *   data: {
     *     // ... data to create a Cofrinhos
     *   }
     * })
     * 
     */
    create<T extends cofrinhosCreateArgs>(args: SelectSubset<T, cofrinhosCreateArgs<ExtArgs>>): Prisma__cofrinhosClient<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cofrinhos.
     * @param {cofrinhosCreateManyArgs} args - Arguments to create many Cofrinhos.
     * @example
     * // Create many Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cofrinhosCreateManyArgs>(args?: SelectSubset<T, cofrinhosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cofrinhos and returns the data saved in the database.
     * @param {cofrinhosCreateManyAndReturnArgs} args - Arguments to create many Cofrinhos.
     * @example
     * // Create many Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cofrinhos and only return the `id`
     * const cofrinhosWithIdOnly = await prisma.cofrinhos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cofrinhosCreateManyAndReturnArgs>(args?: SelectSubset<T, cofrinhosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cofrinhos.
     * @param {cofrinhosDeleteArgs} args - Arguments to delete one Cofrinhos.
     * @example
     * // Delete one Cofrinhos
     * const Cofrinhos = await prisma.cofrinhos.delete({
     *   where: {
     *     // ... filter to delete one Cofrinhos
     *   }
     * })
     * 
     */
    delete<T extends cofrinhosDeleteArgs>(args: SelectSubset<T, cofrinhosDeleteArgs<ExtArgs>>): Prisma__cofrinhosClient<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cofrinhos.
     * @param {cofrinhosUpdateArgs} args - Arguments to update one Cofrinhos.
     * @example
     * // Update one Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cofrinhosUpdateArgs>(args: SelectSubset<T, cofrinhosUpdateArgs<ExtArgs>>): Prisma__cofrinhosClient<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cofrinhos.
     * @param {cofrinhosDeleteManyArgs} args - Arguments to filter Cofrinhos to delete.
     * @example
     * // Delete a few Cofrinhos
     * const { count } = await prisma.cofrinhos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cofrinhosDeleteManyArgs>(args?: SelectSubset<T, cofrinhosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cofrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cofrinhosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cofrinhosUpdateManyArgs>(args: SelectSubset<T, cofrinhosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cofrinhos and returns the data updated in the database.
     * @param {cofrinhosUpdateManyAndReturnArgs} args - Arguments to update many Cofrinhos.
     * @example
     * // Update many Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cofrinhos and only return the `id`
     * const cofrinhosWithIdOnly = await prisma.cofrinhos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cofrinhosUpdateManyAndReturnArgs>(args: SelectSubset<T, cofrinhosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cofrinhos.
     * @param {cofrinhosUpsertArgs} args - Arguments to update or create a Cofrinhos.
     * @example
     * // Update or create a Cofrinhos
     * const cofrinhos = await prisma.cofrinhos.upsert({
     *   create: {
     *     // ... data to create a Cofrinhos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cofrinhos we want to update
     *   }
     * })
     */
    upsert<T extends cofrinhosUpsertArgs>(args: SelectSubset<T, cofrinhosUpsertArgs<ExtArgs>>): Prisma__cofrinhosClient<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cofrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cofrinhosCountArgs} args - Arguments to filter Cofrinhos to count.
     * @example
     * // Count the number of Cofrinhos
     * const count = await prisma.cofrinhos.count({
     *   where: {
     *     // ... the filter for the Cofrinhos we want to count
     *   }
     * })
    **/
    count<T extends cofrinhosCountArgs>(
      args?: Subset<T, cofrinhosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CofrinhosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cofrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CofrinhosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CofrinhosAggregateArgs>(args: Subset<T, CofrinhosAggregateArgs>): Prisma.PrismaPromise<GetCofrinhosAggregateType<T>>

    /**
     * Group by Cofrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cofrinhosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cofrinhosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cofrinhosGroupByArgs['orderBy'] }
        : { orderBy?: cofrinhosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cofrinhosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCofrinhosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cofrinhos model
   */
  readonly fields: cofrinhosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cofrinhos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cofrinhosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curador<T extends cofrinhos$curadorArgs<ExtArgs> = {}>(args?: Subset<T, cofrinhos$curadorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cofrinhos model
   */
  interface cofrinhosFieldRefs {
    readonly id: FieldRef<"cofrinhos", 'Int'>
    readonly address: FieldRef<"cofrinhos", 'String'>
    readonly owner: FieldRef<"cofrinhos", 'String'>
    readonly nome: FieldRef<"cofrinhos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cofrinhos findUnique
   */
  export type cofrinhosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cofrinhosInclude<ExtArgs> | null
    /**
     * Filter, which cofrinhos to fetch.
     */
    where: cofrinhosWhereUniqueInput
  }

  /**
   * cofrinhos findUniqueOrThrow
   */
  export type cofrinhosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cofrinhosInclude<ExtArgs> | null
    /**
     * Filter, which cofrinhos to fetch.
     */
    where: cofrinhosWhereUniqueInput
  }

  /**
   * cofrinhos findFirst
   */
  export type cofrinhosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cofrinhosInclude<ExtArgs> | null
    /**
     * Filter, which cofrinhos to fetch.
     */
    where?: cofrinhosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cofrinhos to fetch.
     */
    orderBy?: cofrinhosOrderByWithRelationInput | cofrinhosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cofrinhos.
     */
    cursor?: cofrinhosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cofrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cofrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cofrinhos.
     */
    distinct?: CofrinhosScalarFieldEnum | CofrinhosScalarFieldEnum[]
  }

  /**
   * cofrinhos findFirstOrThrow
   */
  export type cofrinhosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cofrinhosInclude<ExtArgs> | null
    /**
     * Filter, which cofrinhos to fetch.
     */
    where?: cofrinhosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cofrinhos to fetch.
     */
    orderBy?: cofrinhosOrderByWithRelationInput | cofrinhosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cofrinhos.
     */
    cursor?: cofrinhosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cofrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cofrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cofrinhos.
     */
    distinct?: CofrinhosScalarFieldEnum | CofrinhosScalarFieldEnum[]
  }

  /**
   * cofrinhos findMany
   */
  export type cofrinhosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cofrinhosInclude<ExtArgs> | null
    /**
     * Filter, which cofrinhos to fetch.
     */
    where?: cofrinhosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cofrinhos to fetch.
     */
    orderBy?: cofrinhosOrderByWithRelationInput | cofrinhosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cofrinhos.
     */
    cursor?: cofrinhosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cofrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cofrinhos.
     */
    skip?: number
    distinct?: CofrinhosScalarFieldEnum | CofrinhosScalarFieldEnum[]
  }

  /**
   * cofrinhos create
   */
  export type cofrinhosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cofrinhosInclude<ExtArgs> | null
    /**
     * The data needed to create a cofrinhos.
     */
    data: XOR<cofrinhosCreateInput, cofrinhosUncheckedCreateInput>
  }

  /**
   * cofrinhos createMany
   */
  export type cofrinhosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cofrinhos.
     */
    data: cofrinhosCreateManyInput | cofrinhosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cofrinhos createManyAndReturn
   */
  export type cofrinhosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * The data used to create many cofrinhos.
     */
    data: cofrinhosCreateManyInput | cofrinhosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cofrinhos update
   */
  export type cofrinhosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cofrinhosInclude<ExtArgs> | null
    /**
     * The data needed to update a cofrinhos.
     */
    data: XOR<cofrinhosUpdateInput, cofrinhosUncheckedUpdateInput>
    /**
     * Choose, which cofrinhos to update.
     */
    where: cofrinhosWhereUniqueInput
  }

  /**
   * cofrinhos updateMany
   */
  export type cofrinhosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cofrinhos.
     */
    data: XOR<cofrinhosUpdateManyMutationInput, cofrinhosUncheckedUpdateManyInput>
    /**
     * Filter which cofrinhos to update
     */
    where?: cofrinhosWhereInput
    /**
     * Limit how many cofrinhos to update.
     */
    limit?: number
  }

  /**
   * cofrinhos updateManyAndReturn
   */
  export type cofrinhosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * The data used to update cofrinhos.
     */
    data: XOR<cofrinhosUpdateManyMutationInput, cofrinhosUncheckedUpdateManyInput>
    /**
     * Filter which cofrinhos to update
     */
    where?: cofrinhosWhereInput
    /**
     * Limit how many cofrinhos to update.
     */
    limit?: number
  }

  /**
   * cofrinhos upsert
   */
  export type cofrinhosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cofrinhosInclude<ExtArgs> | null
    /**
     * The filter to search for the cofrinhos to update in case it exists.
     */
    where: cofrinhosWhereUniqueInput
    /**
     * In case the cofrinhos found by the `where` argument doesn't exist, create a new cofrinhos with this data.
     */
    create: XOR<cofrinhosCreateInput, cofrinhosUncheckedCreateInput>
    /**
     * In case the cofrinhos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cofrinhosUpdateInput, cofrinhosUncheckedUpdateInput>
  }

  /**
   * cofrinhos delete
   */
  export type cofrinhosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cofrinhosInclude<ExtArgs> | null
    /**
     * Filter which cofrinhos to delete.
     */
    where: cofrinhosWhereUniqueInput
  }

  /**
   * cofrinhos deleteMany
   */
  export type cofrinhosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cofrinhos to delete
     */
    where?: cofrinhosWhereInput
    /**
     * Limit how many cofrinhos to delete.
     */
    limit?: number
  }

  /**
   * cofrinhos.curador
   */
  export type cofrinhos$curadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
    where?: curadoresWhereInput
    orderBy?: curadoresOrderByWithRelationInput | curadoresOrderByWithRelationInput[]
    cursor?: curadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuradoresScalarFieldEnum | CuradoresScalarFieldEnum[]
  }

  /**
   * cofrinhos without action
   */
  export type cofrinhosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cofrinhos
     */
    select?: cofrinhosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cofrinhos
     */
    omit?: cofrinhosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cofrinhosInclude<ExtArgs> | null
  }


  /**
   * Model curadores
   */

  export type AggregateCuradores = {
    _count: CuradoresCountAggregateOutputType | null
    _avg: CuradoresAvgAggregateOutputType | null
    _sum: CuradoresSumAggregateOutputType | null
    _min: CuradoresMinAggregateOutputType | null
    _max: CuradoresMaxAggregateOutputType | null
  }

  export type CuradoresAvgAggregateOutputType = {
    id: number | null
    cofrinhoId: number | null
  }

  export type CuradoresSumAggregateOutputType = {
    id: number | null
    cofrinhoId: number | null
  }

  export type CuradoresMinAggregateOutputType = {
    id: number | null
    carteira: string | null
    cofrinhoId: number | null
  }

  export type CuradoresMaxAggregateOutputType = {
    id: number | null
    carteira: string | null
    cofrinhoId: number | null
  }

  export type CuradoresCountAggregateOutputType = {
    id: number
    carteira: number
    cofrinhoId: number
    _all: number
  }


  export type CuradoresAvgAggregateInputType = {
    id?: true
    cofrinhoId?: true
  }

  export type CuradoresSumAggregateInputType = {
    id?: true
    cofrinhoId?: true
  }

  export type CuradoresMinAggregateInputType = {
    id?: true
    carteira?: true
    cofrinhoId?: true
  }

  export type CuradoresMaxAggregateInputType = {
    id?: true
    carteira?: true
    cofrinhoId?: true
  }

  export type CuradoresCountAggregateInputType = {
    id?: true
    carteira?: true
    cofrinhoId?: true
    _all?: true
  }

  export type CuradoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curadores to aggregate.
     */
    where?: curadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curadores to fetch.
     */
    orderBy?: curadoresOrderByWithRelationInput | curadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: curadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned curadores
    **/
    _count?: true | CuradoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuradoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuradoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuradoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuradoresMaxAggregateInputType
  }

  export type GetCuradoresAggregateType<T extends CuradoresAggregateArgs> = {
        [P in keyof T & keyof AggregateCuradores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuradores[P]>
      : GetScalarType<T[P], AggregateCuradores[P]>
  }




  export type curadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: curadoresWhereInput
    orderBy?: curadoresOrderByWithAggregationInput | curadoresOrderByWithAggregationInput[]
    by: CuradoresScalarFieldEnum[] | CuradoresScalarFieldEnum
    having?: curadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuradoresCountAggregateInputType | true
    _avg?: CuradoresAvgAggregateInputType
    _sum?: CuradoresSumAggregateInputType
    _min?: CuradoresMinAggregateInputType
    _max?: CuradoresMaxAggregateInputType
  }

  export type CuradoresGroupByOutputType = {
    id: number
    carteira: string
    cofrinhoId: number
    _count: CuradoresCountAggregateOutputType | null
    _avg: CuradoresAvgAggregateOutputType | null
    _sum: CuradoresSumAggregateOutputType | null
    _min: CuradoresMinAggregateOutputType | null
    _max: CuradoresMaxAggregateOutputType | null
  }

  type GetCuradoresGroupByPayload<T extends curadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuradoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuradoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuradoresGroupByOutputType[P]>
            : GetScalarType<T[P], CuradoresGroupByOutputType[P]>
        }
      >
    >


  export type curadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carteira?: boolean
    cofrinhoId?: boolean
    cofrinho?: boolean | cofrinhosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curadores"]>

  export type curadoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carteira?: boolean
    cofrinhoId?: boolean
    cofrinho?: boolean | cofrinhosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curadores"]>

  export type curadoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carteira?: boolean
    cofrinhoId?: boolean
    cofrinho?: boolean | cofrinhosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curadores"]>

  export type curadoresSelectScalar = {
    id?: boolean
    carteira?: boolean
    cofrinhoId?: boolean
  }

  export type curadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carteira" | "cofrinhoId", ExtArgs["result"]["curadores"]>
  export type curadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cofrinho?: boolean | cofrinhosDefaultArgs<ExtArgs>
  }
  export type curadoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cofrinho?: boolean | cofrinhosDefaultArgs<ExtArgs>
  }
  export type curadoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cofrinho?: boolean | cofrinhosDefaultArgs<ExtArgs>
  }

  export type $curadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "curadores"
    objects: {
      cofrinho: Prisma.$cofrinhosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carteira: string
      cofrinhoId: number
    }, ExtArgs["result"]["curadores"]>
    composites: {}
  }

  type curadoresGetPayload<S extends boolean | null | undefined | curadoresDefaultArgs> = $Result.GetResult<Prisma.$curadoresPayload, S>

  type curadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<curadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuradoresCountAggregateInputType | true
    }

  export interface curadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['curadores'], meta: { name: 'curadores' } }
    /**
     * Find zero or one Curadores that matches the filter.
     * @param {curadoresFindUniqueArgs} args - Arguments to find a Curadores
     * @example
     * // Get one Curadores
     * const curadores = await prisma.curadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends curadoresFindUniqueArgs>(args: SelectSubset<T, curadoresFindUniqueArgs<ExtArgs>>): Prisma__curadoresClient<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {curadoresFindUniqueOrThrowArgs} args - Arguments to find a Curadores
     * @example
     * // Get one Curadores
     * const curadores = await prisma.curadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends curadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, curadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__curadoresClient<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curadoresFindFirstArgs} args - Arguments to find a Curadores
     * @example
     * // Get one Curadores
     * const curadores = await prisma.curadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends curadoresFindFirstArgs>(args?: SelectSubset<T, curadoresFindFirstArgs<ExtArgs>>): Prisma__curadoresClient<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curadoresFindFirstOrThrowArgs} args - Arguments to find a Curadores
     * @example
     * // Get one Curadores
     * const curadores = await prisma.curadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends curadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, curadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__curadoresClient<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Curadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curadores
     * const curadores = await prisma.curadores.findMany()
     * 
     * // Get first 10 Curadores
     * const curadores = await prisma.curadores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curadoresWithIdOnly = await prisma.curadores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends curadoresFindManyArgs>(args?: SelectSubset<T, curadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curadores.
     * @param {curadoresCreateArgs} args - Arguments to create a Curadores.
     * @example
     * // Create one Curadores
     * const Curadores = await prisma.curadores.create({
     *   data: {
     *     // ... data to create a Curadores
     *   }
     * })
     * 
     */
    create<T extends curadoresCreateArgs>(args: SelectSubset<T, curadoresCreateArgs<ExtArgs>>): Prisma__curadoresClient<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Curadores.
     * @param {curadoresCreateManyArgs} args - Arguments to create many Curadores.
     * @example
     * // Create many Curadores
     * const curadores = await prisma.curadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends curadoresCreateManyArgs>(args?: SelectSubset<T, curadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Curadores and returns the data saved in the database.
     * @param {curadoresCreateManyAndReturnArgs} args - Arguments to create many Curadores.
     * @example
     * // Create many Curadores
     * const curadores = await prisma.curadores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Curadores and only return the `id`
     * const curadoresWithIdOnly = await prisma.curadores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends curadoresCreateManyAndReturnArgs>(args?: SelectSubset<T, curadoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curadores.
     * @param {curadoresDeleteArgs} args - Arguments to delete one Curadores.
     * @example
     * // Delete one Curadores
     * const Curadores = await prisma.curadores.delete({
     *   where: {
     *     // ... filter to delete one Curadores
     *   }
     * })
     * 
     */
    delete<T extends curadoresDeleteArgs>(args: SelectSubset<T, curadoresDeleteArgs<ExtArgs>>): Prisma__curadoresClient<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curadores.
     * @param {curadoresUpdateArgs} args - Arguments to update one Curadores.
     * @example
     * // Update one Curadores
     * const curadores = await prisma.curadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends curadoresUpdateArgs>(args: SelectSubset<T, curadoresUpdateArgs<ExtArgs>>): Prisma__curadoresClient<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Curadores.
     * @param {curadoresDeleteManyArgs} args - Arguments to filter Curadores to delete.
     * @example
     * // Delete a few Curadores
     * const { count } = await prisma.curadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends curadoresDeleteManyArgs>(args?: SelectSubset<T, curadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curadores
     * const curadores = await prisma.curadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends curadoresUpdateManyArgs>(args: SelectSubset<T, curadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curadores and returns the data updated in the database.
     * @param {curadoresUpdateManyAndReturnArgs} args - Arguments to update many Curadores.
     * @example
     * // Update many Curadores
     * const curadores = await prisma.curadores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Curadores and only return the `id`
     * const curadoresWithIdOnly = await prisma.curadores.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends curadoresUpdateManyAndReturnArgs>(args: SelectSubset<T, curadoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curadores.
     * @param {curadoresUpsertArgs} args - Arguments to update or create a Curadores.
     * @example
     * // Update or create a Curadores
     * const curadores = await prisma.curadores.upsert({
     *   create: {
     *     // ... data to create a Curadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curadores we want to update
     *   }
     * })
     */
    upsert<T extends curadoresUpsertArgs>(args: SelectSubset<T, curadoresUpsertArgs<ExtArgs>>): Prisma__curadoresClient<$Result.GetResult<Prisma.$curadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Curadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curadoresCountArgs} args - Arguments to filter Curadores to count.
     * @example
     * // Count the number of Curadores
     * const count = await prisma.curadores.count({
     *   where: {
     *     // ... the filter for the Curadores we want to count
     *   }
     * })
    **/
    count<T extends curadoresCountArgs>(
      args?: Subset<T, curadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuradoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuradoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuradoresAggregateArgs>(args: Subset<T, CuradoresAggregateArgs>): Prisma.PrismaPromise<GetCuradoresAggregateType<T>>

    /**
     * Group by Curadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curadoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends curadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: curadoresGroupByArgs['orderBy'] }
        : { orderBy?: curadoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, curadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuradoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the curadores model
   */
  readonly fields: curadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for curadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__curadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cofrinho<T extends cofrinhosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cofrinhosDefaultArgs<ExtArgs>>): Prisma__cofrinhosClient<$Result.GetResult<Prisma.$cofrinhosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the curadores model
   */
  interface curadoresFieldRefs {
    readonly id: FieldRef<"curadores", 'Int'>
    readonly carteira: FieldRef<"curadores", 'String'>
    readonly cofrinhoId: FieldRef<"curadores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * curadores findUnique
   */
  export type curadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
    /**
     * Filter, which curadores to fetch.
     */
    where: curadoresWhereUniqueInput
  }

  /**
   * curadores findUniqueOrThrow
   */
  export type curadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
    /**
     * Filter, which curadores to fetch.
     */
    where: curadoresWhereUniqueInput
  }

  /**
   * curadores findFirst
   */
  export type curadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
    /**
     * Filter, which curadores to fetch.
     */
    where?: curadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curadores to fetch.
     */
    orderBy?: curadoresOrderByWithRelationInput | curadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for curadores.
     */
    cursor?: curadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of curadores.
     */
    distinct?: CuradoresScalarFieldEnum | CuradoresScalarFieldEnum[]
  }

  /**
   * curadores findFirstOrThrow
   */
  export type curadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
    /**
     * Filter, which curadores to fetch.
     */
    where?: curadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curadores to fetch.
     */
    orderBy?: curadoresOrderByWithRelationInput | curadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for curadores.
     */
    cursor?: curadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of curadores.
     */
    distinct?: CuradoresScalarFieldEnum | CuradoresScalarFieldEnum[]
  }

  /**
   * curadores findMany
   */
  export type curadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
    /**
     * Filter, which curadores to fetch.
     */
    where?: curadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curadores to fetch.
     */
    orderBy?: curadoresOrderByWithRelationInput | curadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing curadores.
     */
    cursor?: curadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curadores.
     */
    skip?: number
    distinct?: CuradoresScalarFieldEnum | CuradoresScalarFieldEnum[]
  }

  /**
   * curadores create
   */
  export type curadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a curadores.
     */
    data: XOR<curadoresCreateInput, curadoresUncheckedCreateInput>
  }

  /**
   * curadores createMany
   */
  export type curadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many curadores.
     */
    data: curadoresCreateManyInput | curadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * curadores createManyAndReturn
   */
  export type curadoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * The data used to create many curadores.
     */
    data: curadoresCreateManyInput | curadoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * curadores update
   */
  export type curadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a curadores.
     */
    data: XOR<curadoresUpdateInput, curadoresUncheckedUpdateInput>
    /**
     * Choose, which curadores to update.
     */
    where: curadoresWhereUniqueInput
  }

  /**
   * curadores updateMany
   */
  export type curadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update curadores.
     */
    data: XOR<curadoresUpdateManyMutationInput, curadoresUncheckedUpdateManyInput>
    /**
     * Filter which curadores to update
     */
    where?: curadoresWhereInput
    /**
     * Limit how many curadores to update.
     */
    limit?: number
  }

  /**
   * curadores updateManyAndReturn
   */
  export type curadoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * The data used to update curadores.
     */
    data: XOR<curadoresUpdateManyMutationInput, curadoresUncheckedUpdateManyInput>
    /**
     * Filter which curadores to update
     */
    where?: curadoresWhereInput
    /**
     * Limit how many curadores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * curadores upsert
   */
  export type curadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the curadores to update in case it exists.
     */
    where: curadoresWhereUniqueInput
    /**
     * In case the curadores found by the `where` argument doesn't exist, create a new curadores with this data.
     */
    create: XOR<curadoresCreateInput, curadoresUncheckedCreateInput>
    /**
     * In case the curadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<curadoresUpdateInput, curadoresUncheckedUpdateInput>
  }

  /**
   * curadores delete
   */
  export type curadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
    /**
     * Filter which curadores to delete.
     */
    where: curadoresWhereUniqueInput
  }

  /**
   * curadores deleteMany
   */
  export type curadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curadores to delete
     */
    where?: curadoresWhereInput
    /**
     * Limit how many curadores to delete.
     */
    limit?: number
  }

  /**
   * curadores without action
   */
  export type curadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curadores
     */
    select?: curadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curadores
     */
    omit?: curadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curadoresInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CofrinhosScalarFieldEnum: {
    id: 'id',
    address: 'address',
    owner: 'owner',
    nome: 'nome'
  };

  export type CofrinhosScalarFieldEnum = (typeof CofrinhosScalarFieldEnum)[keyof typeof CofrinhosScalarFieldEnum]


  export const CuradoresScalarFieldEnum: {
    id: 'id',
    carteira: 'carteira',
    cofrinhoId: 'cofrinhoId'
  };

  export type CuradoresScalarFieldEnum = (typeof CuradoresScalarFieldEnum)[keyof typeof CuradoresScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type cofrinhosWhereInput = {
    AND?: cofrinhosWhereInput | cofrinhosWhereInput[]
    OR?: cofrinhosWhereInput[]
    NOT?: cofrinhosWhereInput | cofrinhosWhereInput[]
    id?: IntFilter<"cofrinhos"> | number
    address?: StringFilter<"cofrinhos"> | string
    owner?: StringFilter<"cofrinhos"> | string
    nome?: StringFilter<"cofrinhos"> | string
    curador?: CuradoresListRelationFilter
  }

  export type cofrinhosOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    owner?: SortOrder
    nome?: SortOrder
    curador?: curadoresOrderByRelationAggregateInput
  }

  export type cofrinhosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address?: string
    AND?: cofrinhosWhereInput | cofrinhosWhereInput[]
    OR?: cofrinhosWhereInput[]
    NOT?: cofrinhosWhereInput | cofrinhosWhereInput[]
    owner?: StringFilter<"cofrinhos"> | string
    nome?: StringFilter<"cofrinhos"> | string
    curador?: CuradoresListRelationFilter
  }, "id" | "address">

  export type cofrinhosOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    owner?: SortOrder
    nome?: SortOrder
    _count?: cofrinhosCountOrderByAggregateInput
    _avg?: cofrinhosAvgOrderByAggregateInput
    _max?: cofrinhosMaxOrderByAggregateInput
    _min?: cofrinhosMinOrderByAggregateInput
    _sum?: cofrinhosSumOrderByAggregateInput
  }

  export type cofrinhosScalarWhereWithAggregatesInput = {
    AND?: cofrinhosScalarWhereWithAggregatesInput | cofrinhosScalarWhereWithAggregatesInput[]
    OR?: cofrinhosScalarWhereWithAggregatesInput[]
    NOT?: cofrinhosScalarWhereWithAggregatesInput | cofrinhosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cofrinhos"> | number
    address?: StringWithAggregatesFilter<"cofrinhos"> | string
    owner?: StringWithAggregatesFilter<"cofrinhos"> | string
    nome?: StringWithAggregatesFilter<"cofrinhos"> | string
  }

  export type curadoresWhereInput = {
    AND?: curadoresWhereInput | curadoresWhereInput[]
    OR?: curadoresWhereInput[]
    NOT?: curadoresWhereInput | curadoresWhereInput[]
    id?: IntFilter<"curadores"> | number
    carteira?: StringFilter<"curadores"> | string
    cofrinhoId?: IntFilter<"curadores"> | number
    cofrinho?: XOR<CofrinhosScalarRelationFilter, cofrinhosWhereInput>
  }

  export type curadoresOrderByWithRelationInput = {
    id?: SortOrder
    carteira?: SortOrder
    cofrinhoId?: SortOrder
    cofrinho?: cofrinhosOrderByWithRelationInput
  }

  export type curadoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: curadoresWhereInput | curadoresWhereInput[]
    OR?: curadoresWhereInput[]
    NOT?: curadoresWhereInput | curadoresWhereInput[]
    carteira?: StringFilter<"curadores"> | string
    cofrinhoId?: IntFilter<"curadores"> | number
    cofrinho?: XOR<CofrinhosScalarRelationFilter, cofrinhosWhereInput>
  }, "id">

  export type curadoresOrderByWithAggregationInput = {
    id?: SortOrder
    carteira?: SortOrder
    cofrinhoId?: SortOrder
    _count?: curadoresCountOrderByAggregateInput
    _avg?: curadoresAvgOrderByAggregateInput
    _max?: curadoresMaxOrderByAggregateInput
    _min?: curadoresMinOrderByAggregateInput
    _sum?: curadoresSumOrderByAggregateInput
  }

  export type curadoresScalarWhereWithAggregatesInput = {
    AND?: curadoresScalarWhereWithAggregatesInput | curadoresScalarWhereWithAggregatesInput[]
    OR?: curadoresScalarWhereWithAggregatesInput[]
    NOT?: curadoresScalarWhereWithAggregatesInput | curadoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"curadores"> | number
    carteira?: StringWithAggregatesFilter<"curadores"> | string
    cofrinhoId?: IntWithAggregatesFilter<"curadores"> | number
  }

  export type cofrinhosCreateInput = {
    address: string
    owner: string
    nome: string
    curador?: curadoresCreateNestedManyWithoutCofrinhoInput
  }

  export type cofrinhosUncheckedCreateInput = {
    id?: number
    address: string
    owner: string
    nome: string
    curador?: curadoresUncheckedCreateNestedManyWithoutCofrinhoInput
  }

  export type cofrinhosUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    curador?: curadoresUpdateManyWithoutCofrinhoNestedInput
  }

  export type cofrinhosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    curador?: curadoresUncheckedUpdateManyWithoutCofrinhoNestedInput
  }

  export type cofrinhosCreateManyInput = {
    id?: number
    address: string
    owner: string
    nome: string
  }

  export type cofrinhosUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type cofrinhosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type curadoresCreateInput = {
    carteira: string
    cofrinho: cofrinhosCreateNestedOneWithoutCuradorInput
  }

  export type curadoresUncheckedCreateInput = {
    id?: number
    carteira: string
    cofrinhoId: number
  }

  export type curadoresUpdateInput = {
    carteira?: StringFieldUpdateOperationsInput | string
    cofrinho?: cofrinhosUpdateOneRequiredWithoutCuradorNestedInput
  }

  export type curadoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carteira?: StringFieldUpdateOperationsInput | string
    cofrinhoId?: IntFieldUpdateOperationsInput | number
  }

  export type curadoresCreateManyInput = {
    id?: number
    carteira: string
    cofrinhoId: number
  }

  export type curadoresUpdateManyMutationInput = {
    carteira?: StringFieldUpdateOperationsInput | string
  }

  export type curadoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carteira?: StringFieldUpdateOperationsInput | string
    cofrinhoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CuradoresListRelationFilter = {
    every?: curadoresWhereInput
    some?: curadoresWhereInput
    none?: curadoresWhereInput
  }

  export type curadoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cofrinhosCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    owner?: SortOrder
    nome?: SortOrder
  }

  export type cofrinhosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cofrinhosMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    owner?: SortOrder
    nome?: SortOrder
  }

  export type cofrinhosMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    owner?: SortOrder
    nome?: SortOrder
  }

  export type cofrinhosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CofrinhosScalarRelationFilter = {
    is?: cofrinhosWhereInput
    isNot?: cofrinhosWhereInput
  }

  export type curadoresCountOrderByAggregateInput = {
    id?: SortOrder
    carteira?: SortOrder
    cofrinhoId?: SortOrder
  }

  export type curadoresAvgOrderByAggregateInput = {
    id?: SortOrder
    cofrinhoId?: SortOrder
  }

  export type curadoresMaxOrderByAggregateInput = {
    id?: SortOrder
    carteira?: SortOrder
    cofrinhoId?: SortOrder
  }

  export type curadoresMinOrderByAggregateInput = {
    id?: SortOrder
    carteira?: SortOrder
    cofrinhoId?: SortOrder
  }

  export type curadoresSumOrderByAggregateInput = {
    id?: SortOrder
    cofrinhoId?: SortOrder
  }

  export type curadoresCreateNestedManyWithoutCofrinhoInput = {
    create?: XOR<curadoresCreateWithoutCofrinhoInput, curadoresUncheckedCreateWithoutCofrinhoInput> | curadoresCreateWithoutCofrinhoInput[] | curadoresUncheckedCreateWithoutCofrinhoInput[]
    connectOrCreate?: curadoresCreateOrConnectWithoutCofrinhoInput | curadoresCreateOrConnectWithoutCofrinhoInput[]
    createMany?: curadoresCreateManyCofrinhoInputEnvelope
    connect?: curadoresWhereUniqueInput | curadoresWhereUniqueInput[]
  }

  export type curadoresUncheckedCreateNestedManyWithoutCofrinhoInput = {
    create?: XOR<curadoresCreateWithoutCofrinhoInput, curadoresUncheckedCreateWithoutCofrinhoInput> | curadoresCreateWithoutCofrinhoInput[] | curadoresUncheckedCreateWithoutCofrinhoInput[]
    connectOrCreate?: curadoresCreateOrConnectWithoutCofrinhoInput | curadoresCreateOrConnectWithoutCofrinhoInput[]
    createMany?: curadoresCreateManyCofrinhoInputEnvelope
    connect?: curadoresWhereUniqueInput | curadoresWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type curadoresUpdateManyWithoutCofrinhoNestedInput = {
    create?: XOR<curadoresCreateWithoutCofrinhoInput, curadoresUncheckedCreateWithoutCofrinhoInput> | curadoresCreateWithoutCofrinhoInput[] | curadoresUncheckedCreateWithoutCofrinhoInput[]
    connectOrCreate?: curadoresCreateOrConnectWithoutCofrinhoInput | curadoresCreateOrConnectWithoutCofrinhoInput[]
    upsert?: curadoresUpsertWithWhereUniqueWithoutCofrinhoInput | curadoresUpsertWithWhereUniqueWithoutCofrinhoInput[]
    createMany?: curadoresCreateManyCofrinhoInputEnvelope
    set?: curadoresWhereUniqueInput | curadoresWhereUniqueInput[]
    disconnect?: curadoresWhereUniqueInput | curadoresWhereUniqueInput[]
    delete?: curadoresWhereUniqueInput | curadoresWhereUniqueInput[]
    connect?: curadoresWhereUniqueInput | curadoresWhereUniqueInput[]
    update?: curadoresUpdateWithWhereUniqueWithoutCofrinhoInput | curadoresUpdateWithWhereUniqueWithoutCofrinhoInput[]
    updateMany?: curadoresUpdateManyWithWhereWithoutCofrinhoInput | curadoresUpdateManyWithWhereWithoutCofrinhoInput[]
    deleteMany?: curadoresScalarWhereInput | curadoresScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type curadoresUncheckedUpdateManyWithoutCofrinhoNestedInput = {
    create?: XOR<curadoresCreateWithoutCofrinhoInput, curadoresUncheckedCreateWithoutCofrinhoInput> | curadoresCreateWithoutCofrinhoInput[] | curadoresUncheckedCreateWithoutCofrinhoInput[]
    connectOrCreate?: curadoresCreateOrConnectWithoutCofrinhoInput | curadoresCreateOrConnectWithoutCofrinhoInput[]
    upsert?: curadoresUpsertWithWhereUniqueWithoutCofrinhoInput | curadoresUpsertWithWhereUniqueWithoutCofrinhoInput[]
    createMany?: curadoresCreateManyCofrinhoInputEnvelope
    set?: curadoresWhereUniqueInput | curadoresWhereUniqueInput[]
    disconnect?: curadoresWhereUniqueInput | curadoresWhereUniqueInput[]
    delete?: curadoresWhereUniqueInput | curadoresWhereUniqueInput[]
    connect?: curadoresWhereUniqueInput | curadoresWhereUniqueInput[]
    update?: curadoresUpdateWithWhereUniqueWithoutCofrinhoInput | curadoresUpdateWithWhereUniqueWithoutCofrinhoInput[]
    updateMany?: curadoresUpdateManyWithWhereWithoutCofrinhoInput | curadoresUpdateManyWithWhereWithoutCofrinhoInput[]
    deleteMany?: curadoresScalarWhereInput | curadoresScalarWhereInput[]
  }

  export type cofrinhosCreateNestedOneWithoutCuradorInput = {
    create?: XOR<cofrinhosCreateWithoutCuradorInput, cofrinhosUncheckedCreateWithoutCuradorInput>
    connectOrCreate?: cofrinhosCreateOrConnectWithoutCuradorInput
    connect?: cofrinhosWhereUniqueInput
  }

  export type cofrinhosUpdateOneRequiredWithoutCuradorNestedInput = {
    create?: XOR<cofrinhosCreateWithoutCuradorInput, cofrinhosUncheckedCreateWithoutCuradorInput>
    connectOrCreate?: cofrinhosCreateOrConnectWithoutCuradorInput
    upsert?: cofrinhosUpsertWithoutCuradorInput
    connect?: cofrinhosWhereUniqueInput
    update?: XOR<XOR<cofrinhosUpdateToOneWithWhereWithoutCuradorInput, cofrinhosUpdateWithoutCuradorInput>, cofrinhosUncheckedUpdateWithoutCuradorInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type curadoresCreateWithoutCofrinhoInput = {
    carteira: string
  }

  export type curadoresUncheckedCreateWithoutCofrinhoInput = {
    id?: number
    carteira: string
  }

  export type curadoresCreateOrConnectWithoutCofrinhoInput = {
    where: curadoresWhereUniqueInput
    create: XOR<curadoresCreateWithoutCofrinhoInput, curadoresUncheckedCreateWithoutCofrinhoInput>
  }

  export type curadoresCreateManyCofrinhoInputEnvelope = {
    data: curadoresCreateManyCofrinhoInput | curadoresCreateManyCofrinhoInput[]
    skipDuplicates?: boolean
  }

  export type curadoresUpsertWithWhereUniqueWithoutCofrinhoInput = {
    where: curadoresWhereUniqueInput
    update: XOR<curadoresUpdateWithoutCofrinhoInput, curadoresUncheckedUpdateWithoutCofrinhoInput>
    create: XOR<curadoresCreateWithoutCofrinhoInput, curadoresUncheckedCreateWithoutCofrinhoInput>
  }

  export type curadoresUpdateWithWhereUniqueWithoutCofrinhoInput = {
    where: curadoresWhereUniqueInput
    data: XOR<curadoresUpdateWithoutCofrinhoInput, curadoresUncheckedUpdateWithoutCofrinhoInput>
  }

  export type curadoresUpdateManyWithWhereWithoutCofrinhoInput = {
    where: curadoresScalarWhereInput
    data: XOR<curadoresUpdateManyMutationInput, curadoresUncheckedUpdateManyWithoutCofrinhoInput>
  }

  export type curadoresScalarWhereInput = {
    AND?: curadoresScalarWhereInput | curadoresScalarWhereInput[]
    OR?: curadoresScalarWhereInput[]
    NOT?: curadoresScalarWhereInput | curadoresScalarWhereInput[]
    id?: IntFilter<"curadores"> | number
    carteira?: StringFilter<"curadores"> | string
    cofrinhoId?: IntFilter<"curadores"> | number
  }

  export type cofrinhosCreateWithoutCuradorInput = {
    address: string
    owner: string
    nome: string
  }

  export type cofrinhosUncheckedCreateWithoutCuradorInput = {
    id?: number
    address: string
    owner: string
    nome: string
  }

  export type cofrinhosCreateOrConnectWithoutCuradorInput = {
    where: cofrinhosWhereUniqueInput
    create: XOR<cofrinhosCreateWithoutCuradorInput, cofrinhosUncheckedCreateWithoutCuradorInput>
  }

  export type cofrinhosUpsertWithoutCuradorInput = {
    update: XOR<cofrinhosUpdateWithoutCuradorInput, cofrinhosUncheckedUpdateWithoutCuradorInput>
    create: XOR<cofrinhosCreateWithoutCuradorInput, cofrinhosUncheckedCreateWithoutCuradorInput>
    where?: cofrinhosWhereInput
  }

  export type cofrinhosUpdateToOneWithWhereWithoutCuradorInput = {
    where?: cofrinhosWhereInput
    data: XOR<cofrinhosUpdateWithoutCuradorInput, cofrinhosUncheckedUpdateWithoutCuradorInput>
  }

  export type cofrinhosUpdateWithoutCuradorInput = {
    address?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type cofrinhosUncheckedUpdateWithoutCuradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type curadoresCreateManyCofrinhoInput = {
    id?: number
    carteira: string
  }

  export type curadoresUpdateWithoutCofrinhoInput = {
    carteira?: StringFieldUpdateOperationsInput | string
  }

  export type curadoresUncheckedUpdateWithoutCofrinhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    carteira?: StringFieldUpdateOperationsInput | string
  }

  export type curadoresUncheckedUpdateManyWithoutCofrinhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    carteira?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}