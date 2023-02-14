# OVM_SequencerFeeVault



> OVM_SequencerFeeVault



*Simple holding contract for fees paid to the Sequencer. Likely to be replaced in the future but &quot;good enough for now&quot;.*

## Methods

### MIN_WITHDRAWAL_AMOUNT

```solidity
function MIN_WITHDRAWAL_AMOUNT() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### claimOwnership

```solidity
function claimOwnership() external nonpayable
```






### l1FeeWallet

```solidity
function l1FeeWallet() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### newOwner

```solidity
function newOwner() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### owner

```solidity
function owner() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### send

```solidity
function send(address payable to, uint256 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address payable | undefined
| amount | uint256 | undefined

### transferOwnership

```solidity
function transferOwnership(address _newOwner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | undefined

### updateFeeWallet

```solidity
function updateFeeWallet(address _newWallet) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newWallet | address | undefined

### withdraw

```solidity
function withdraw() external nonpayable
```








## Events

### FeeWalletUpdated

```solidity
event FeeWalletUpdated(address indexed oldWallet, address indexed newWallet)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldWallet `indexed` | address | undefined |
| newWallet `indexed` | address | undefined |

### OwnershipTransferRequested

```solidity
event OwnershipTransferRequested(address indexed oldOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed oldOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



