import JSBI from 'jsbi'
import { proxies as kovanProxies } from 'dxswap-core/.openzeppelin/kovan.json'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.ROPSTEN]: '0x0000000000000000000000000000000000000003',
  [ChainId.RINKEBY]: '0x0000000000000000000000000000000000000004',
  [ChainId.GÖRLI]: '0x0000000000000000000000000000000000000005',
  [ChainId.KOVAN]: kovanProxies['dxswap-core/DXswapFactory'][0].address
}

export const INIT_CODE_HASH = '0x25dd05d38222d917e4487e1da5be545f4c08adc197eb59f87c597a13cf7791d2'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
