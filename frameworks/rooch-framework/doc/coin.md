
<a name="0x3_coin"></a>

# Module `0x3::coin`

This module provides the foundation for typesafe Coins.


-  [Struct `Coin`](#0x3_coin_Coin)
-  [Struct `GenericCoin`](#0x3_coin_GenericCoin)
-  [Resource `CoinInfo`](#0x3_coin_CoinInfo)
-  [Resource `CoinMetadata`](#0x3_coin_CoinMetadata)
-  [Resource `CoinRegistry`](#0x3_coin_CoinRegistry)
-  [Struct `MintEvent`](#0x3_coin_MintEvent)
-  [Struct `BurnEvent`](#0x3_coin_BurnEvent)
-  [Constants](#@Constants_0)
-  [Function `genesis_init`](#0x3_coin_genesis_init)
-  [Function `init_coin_registry`](#0x3_coin_init_coin_registry)
-  [Function `coin_address`](#0x3_coin_coin_address)
-  [Function `check_coin_info_registered`](#0x3_coin_check_coin_info_registered)
-  [Function `is_registered`](#0x3_coin_is_registered)
-  [Function `coin_info_id`](#0x3_coin_coin_info_id)
-  [Function `coin_info_id_by_type_name`](#0x3_coin_coin_info_id_by_type_name)
-  [Function `name`](#0x3_coin_name)
-  [Function `name_by_type`](#0x3_coin_name_by_type)
-  [Function `name_by_type_name`](#0x3_coin_name_by_type_name)
-  [Function `symbol`](#0x3_coin_symbol)
-  [Function `symbol_by_type`](#0x3_coin_symbol_by_type)
-  [Function `symbol_by_type_name`](#0x3_coin_symbol_by_type_name)
-  [Function `decimals`](#0x3_coin_decimals)
-  [Function `decimals_by_type`](#0x3_coin_decimals_by_type)
-  [Function `decimals_by_type_name`](#0x3_coin_decimals_by_type_name)
-  [Function `supply`](#0x3_coin_supply)
-  [Function `supply_by_type`](#0x3_coin_supply_by_type)
-  [Function `supply_by_type_name`](#0x3_coin_supply_by_type_name)
-  [Function `icon_url`](#0x3_coin_icon_url)
-  [Function `icon_url_by_type`](#0x3_coin_icon_url_by_type)
-  [Function `icon_url_by_type_name`](#0x3_coin_icon_url_by_type_name)
-  [Function `is_same_coin`](#0x3_coin_is_same_coin)
-  [Function `destroy_zero`](#0x3_coin_destroy_zero)
-  [Function `extract`](#0x3_coin_extract)
-  [Function `extract_all`](#0x3_coin_extract_all)
-  [Function `merge`](#0x3_coin_merge)
-  [Function `value`](#0x3_coin_value)
-  [Function `zero`](#0x3_coin_zero)
-  [Function `coin_info`](#0x3_coin_coin_info)
-  [Function `get_coin_info_by_type_name`](#0x3_coin_get_coin_info_by_type_name)
-  [Function `upsert_icon_url`](#0x3_coin_upsert_icon_url)
-  [Function `register_extend`](#0x3_coin_register_extend)
-  [Function `init_metadata`](#0x3_coin_init_metadata)
-  [Function `mint`](#0x3_coin_mint)
-  [Function `mint_extend`](#0x3_coin_mint_extend)
-  [Function `burn`](#0x3_coin_burn)
-  [Function `burn_extend`](#0x3_coin_burn_extend)
-  [Function `unpack`](#0x3_coin_unpack)
-  [Function `pack`](#0x3_coin_pack)
-  [Function `convert_coin_to_generic_coin`](#0x3_coin_convert_coin_to_generic_coin)
-  [Function `convert_generic_coin_to_coin`](#0x3_coin_convert_generic_coin_to_coin)
-  [Function `check_coin_info_registered_by_type_name`](#0x3_coin_check_coin_info_registered_by_type_name)
-  [Function `is_registered_by_type_name`](#0x3_coin_is_registered_by_type_name)
-  [Function `generic_coin_value`](#0x3_coin_generic_coin_value)
-  [Function `unpack_generic_coin`](#0x3_coin_unpack_generic_coin)
-  [Function `pack_generic_coin`](#0x3_coin_pack_generic_coin)
-  [Function `merge_generic`](#0x3_coin_merge_generic)
-  [Function `coin_type`](#0x3_coin_coin_type)


<pre><code><b>use</b> <a href="">0x1::option</a>;
<b>use</b> <a href="">0x1::string</a>;
<b>use</b> <a href="">0x2::event</a>;
<b>use</b> <a href="">0x2::object</a>;
<b>use</b> <a href="">0x2::type_info</a>;
</code></pre>



<a name="0x3_coin_Coin"></a>

## Struct `Coin`

Main structure representing a coin.
Note the <code>CoinType</code> must have <code>key</code> ability.
if the <code>CoinType</code> has <code>store</code> ability, the <code><a href="coin.md#0x3_coin_Coin">Coin</a></code> is a public coin, the user can operate it directly by coin module's function.
Otherwise, the <code><a href="coin.md#0x3_coin_Coin">Coin</a></code> is a private coin, the user can only operate it by <code>CoinType</code> module's function.
The Coin has no ability, it is a hot potato type, only can handle by Coin module.


<pre><code><b>struct</b> <a href="coin.md#0x3_coin_Coin">Coin</a>&lt;CoinType: key&gt;
</code></pre>



<a name="0x3_coin_GenericCoin"></a>

## Struct `GenericCoin`

Main structure representing a coin.
Note the <code>CoinType</code> must have <code>key</code> ability.
if the <code>CoinType</code> has <code>store</code> ability, the <code><a href="coin.md#0x3_coin_Coin">Coin</a></code> is a public coin, the user can operate it directly by coin module's function.
Otherwise, the <code><a href="coin.md#0x3_coin_Coin">Coin</a></code> is a private coin, the user can only operate it by <code>CoinType</code> module's function.
The Coin has no ability, it is a hot potato type, only can handle by Coin module.


<pre><code><b>struct</b> <a href="coin.md#0x3_coin_GenericCoin">GenericCoin</a>
</code></pre>



<a name="0x3_coin_CoinInfo"></a>

## Resource `CoinInfo`

Information about a specific coin type. Stored in the global Object storage.
CoinInfo<CoinType> is a named Object, the <code>coin_type</code> is the unique key.


<pre><code><b>struct</b> <a href="coin.md#0x3_coin_CoinInfo">CoinInfo</a>&lt;CoinType: key&gt; <b>has</b> store, key
</code></pre>



<a name="0x3_coin_CoinMetadata"></a>

## Resource `CoinMetadata`

Coin metadata is copied from CoinInfo, and stored as dynamic field of CoinRegistry


<pre><code><b>struct</b> <a href="coin.md#0x3_coin_CoinMetadata">CoinMetadata</a> <b>has</b> store, key
</code></pre>



<a name="0x3_coin_CoinRegistry"></a>

## Resource `CoinRegistry`

The registry of all coin types.


<pre><code><b>struct</b> <a href="coin.md#0x3_coin_CoinRegistry">CoinRegistry</a> <b>has</b> key
</code></pre>



<a name="0x3_coin_MintEvent"></a>

## Struct `MintEvent`

Event emitted when coin minted.


<pre><code><b>struct</b> <a href="coin.md#0x3_coin_MintEvent">MintEvent</a> <b>has</b> <b>copy</b>, drop, store
</code></pre>



<a name="0x3_coin_BurnEvent"></a>

## Struct `BurnEvent`

Event emitted when coin burned.


<pre><code><b>struct</b> <a href="coin.md#0x3_coin_BurnEvent">BurnEvent</a> <b>has</b> <b>copy</b>, drop, store
</code></pre>



<a name="@Constants_0"></a>

## Constants


<a name="0x3_coin_MAX_U64"></a>

Maximum possible aggregatable coin value.


<pre><code><b>const</b> <a href="coin.md#0x3_coin_MAX_U64">MAX_U64</a>: u128 = 18446744073709551615;
</code></pre>



<a name="0x3_coin_MAX_U128"></a>

Maximum possible coin supply.


<pre><code><b>const</b> <a href="coin.md#0x3_coin_MAX_U128">MAX_U128</a>: u128 = 340282366920938463463374607431768211455;
</code></pre>



<a name="0x3_coin_MAX_U256"></a>



<pre><code><b>const</b> <a href="coin.md#0x3_coin_MAX_U256">MAX_U256</a>: <a href="">u256</a> = 115792089237316195423570985008687907853269984665640564039457584007913129639935;
</code></pre>



<a name="0x3_coin_ErrorCoinInfoAlreadyRegistered"></a>

<code>CoinType</code> is already registered as a coin


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorCoinInfoAlreadyRegistered">ErrorCoinInfoAlreadyRegistered</a>: u64 = 2;
</code></pre>



<a name="0x3_coin_ErrorCoinInfoNotRegistered"></a>

<code>CoinType</code> is not registered as a coin


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorCoinInfoNotRegistered">ErrorCoinInfoNotRegistered</a>: u64 = 1;
</code></pre>



<a name="0x3_coin_ErrorCoinInfosNotFound"></a>

Global CoinInfos should exist


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorCoinInfosNotFound">ErrorCoinInfosNotFound</a>: u64 = 8;
</code></pre>



<a name="0x3_coin_ErrorCoinNameTooLong"></a>

Name of the coin is too long


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorCoinNameTooLong">ErrorCoinNameTooLong</a>: u64 = 6;
</code></pre>



<a name="0x3_coin_ErrorCoinRegisterAlreadyInitialized"></a>

CoinRegister is already initialized


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorCoinRegisterAlreadyInitialized">ErrorCoinRegisterAlreadyInitialized</a>: u64 = 9;
</code></pre>



<a name="0x3_coin_ErrorCoinSymbolTooLong"></a>

Symbol of the coin is too long


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorCoinSymbolTooLong">ErrorCoinSymbolTooLong</a>: u64 = 7;
</code></pre>



<a name="0x3_coin_ErrorCoinTypeInvalid"></a>

The coin type is invalid


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorCoinTypeInvalid">ErrorCoinTypeInvalid</a>: u64 = 12;
</code></pre>



<a name="0x3_coin_ErrorCoinTypeNotMatch"></a>

The coin type is not match


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorCoinTypeNotMatch">ErrorCoinTypeNotMatch</a>: u64 = 11;
</code></pre>



<a name="0x3_coin_ErrorDeprecated"></a>

The function is deprecated


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorDeprecated">ErrorDeprecated</a>: u64 = 10;
</code></pre>



<a name="0x3_coin_ErrorDestroyOfNonZeroCoin"></a>

Cannot destroy non-zero coins


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorDestroyOfNonZeroCoin">ErrorDestroyOfNonZeroCoin</a>: u64 = 4;
</code></pre>



<a name="0x3_coin_ErrorInsufficientBalance"></a>

Not enough coins to extract


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorInsufficientBalance">ErrorInsufficientBalance</a>: u64 = 3;
</code></pre>



<a name="0x3_coin_ErrorZeroCoinAmount"></a>

Coin amount cannot be zero


<pre><code><b>const</b> <a href="coin.md#0x3_coin_ErrorZeroCoinAmount">ErrorZeroCoinAmount</a>: u64 = 5;
</code></pre>



<a name="0x3_coin_MAX_COIN_NAME_LENGTH"></a>



<pre><code><b>const</b> <a href="coin.md#0x3_coin_MAX_COIN_NAME_LENGTH">MAX_COIN_NAME_LENGTH</a>: u64 = 32;
</code></pre>



<a name="0x3_coin_MAX_COIN_SYMBOL_LENGTH"></a>



<pre><code><b>const</b> <a href="coin.md#0x3_coin_MAX_COIN_SYMBOL_LENGTH">MAX_COIN_SYMBOL_LENGTH</a>: u64 = 10;
</code></pre>



<a name="0x3_coin_genesis_init"></a>

## Function `genesis_init`



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="coin.md#0x3_coin_genesis_init">genesis_init</a>(__genesis_account: &<a href="">signer</a>)
</code></pre>



<a name="0x3_coin_init_coin_registry"></a>

## Function `init_coin_registry`

Initialize the CoinRegistry, this function is for framework upgrade.


<pre><code>entry <b>fun</b> <a href="coin.md#0x3_coin_init_coin_registry">init_coin_registry</a>()
</code></pre>



<a name="0x3_coin_coin_address"></a>

## Function `coin_address`

A helper function that returns the address of CoinType.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_coin_address">coin_address</a>&lt;CoinType: key&gt;(): <b>address</b>
</code></pre>



<a name="0x3_coin_check_coin_info_registered"></a>

## Function `check_coin_info_registered`

A helper function that check the <code>CoinType</code> is registered, if not, abort.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_check_coin_info_registered">check_coin_info_registered</a>&lt;CoinType: key&gt;()
</code></pre>



<a name="0x3_coin_is_registered"></a>

## Function `is_registered`

Returns <code><b>true</b></code> if the type <code>CoinType</code> is an registered coin.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_is_registered">is_registered</a>&lt;CoinType: key&gt;(): bool
</code></pre>



<a name="0x3_coin_coin_info_id"></a>

## Function `coin_info_id`

Return the ObjectID of Object<CoinInfo<CoinType>>


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_coin_info_id">coin_info_id</a>&lt;CoinType: key&gt;(): <a href="_ObjectID">object::ObjectID</a>
</code></pre>



<a name="0x3_coin_coin_info_id_by_type_name"></a>

## Function `coin_info_id_by_type_name`

Returns the coin info id by the coin type name


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_coin_info_id_by_type_name">coin_info_id_by_type_name</a>(coin_type: <a href="_String">string::String</a>): <a href="_ObjectID">object::ObjectID</a>
</code></pre>



<a name="0x3_coin_name"></a>

## Function `name`

Returns the name of the coin.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_name">name</a>&lt;CoinType: key&gt;(coin_info: &<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;): <a href="_String">string::String</a>
</code></pre>



<a name="0x3_coin_name_by_type"></a>

## Function `name_by_type`

Returns the name of the coin by the type <code>CoinType</code>


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_name_by_type">name_by_type</a>&lt;CoinType: key&gt;(): <a href="_String">string::String</a>
</code></pre>



<a name="0x3_coin_name_by_type_name"></a>

## Function `name_by_type_name`

Returns the name of the coin by the coin type name


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_name_by_type_name">name_by_type_name</a>(coin_type_name: &<a href="_String">string::String</a>): <a href="_String">string::String</a>
</code></pre>



<a name="0x3_coin_symbol"></a>

## Function `symbol`

Returns the symbol of the coin, usually a shorter version of the name.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_symbol">symbol</a>&lt;CoinType: key&gt;(coin_info: &<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;): <a href="_String">string::String</a>
</code></pre>



<a name="0x3_coin_symbol_by_type"></a>

## Function `symbol_by_type`

Returns the symbol of the coin by the type <code>CoinType</code>


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_symbol_by_type">symbol_by_type</a>&lt;CoinType: key&gt;(): <a href="_String">string::String</a>
</code></pre>



<a name="0x3_coin_symbol_by_type_name"></a>

## Function `symbol_by_type_name`

Returns the symbol of the coin by the coin type name


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_symbol_by_type_name">symbol_by_type_name</a>(coin_type_name: &<a href="_String">string::String</a>): <a href="_String">string::String</a>
</code></pre>



<a name="0x3_coin_decimals"></a>

## Function `decimals`

Returns the number of decimals used to get its user representation.
For example, if <code>decimals</code> equals <code>2</code>, a balance of <code>505</code> coins should
be displayed to a user as <code>5.05</code> (<code>505 / 10 ** 2</code>).


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_decimals">decimals</a>&lt;CoinType: key&gt;(coin_info: &<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;): u8
</code></pre>



<a name="0x3_coin_decimals_by_type"></a>

## Function `decimals_by_type`

Returns the decimals of the coin by the type <code>CoinType</code>


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_decimals_by_type">decimals_by_type</a>&lt;CoinType: key&gt;(): u8
</code></pre>



<a name="0x3_coin_decimals_by_type_name"></a>

## Function `decimals_by_type_name`

Returns the decimals of the coin by the coin type name


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_decimals_by_type_name">decimals_by_type_name</a>(coin_type_name: &<a href="_String">string::String</a>): u8
</code></pre>



<a name="0x3_coin_supply"></a>

## Function `supply`

Returns the amount of coin in existence.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_supply">supply</a>&lt;CoinType: key&gt;(coin_info: &<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;): <a href="">u256</a>
</code></pre>



<a name="0x3_coin_supply_by_type"></a>

## Function `supply_by_type`

Returns the amount of coin in existence by the type <code>CoinType</code>


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_supply_by_type">supply_by_type</a>&lt;CoinType: key&gt;(): <a href="">u256</a>
</code></pre>



<a name="0x3_coin_supply_by_type_name"></a>

## Function `supply_by_type_name`

Returns the amount of coin in existence by the coin type name


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_supply_by_type_name">supply_by_type_name</a>(coin_type_name: &<a href="_String">string::String</a>): <a href="">u256</a>
</code></pre>



<a name="0x3_coin_icon_url"></a>

## Function `icon_url`

Returns the icon url of coin.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_icon_url">icon_url</a>&lt;CoinType: key&gt;(coin_info: &<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;): <a href="_Option">option::Option</a>&lt;<a href="_String">string::String</a>&gt;
</code></pre>



<a name="0x3_coin_icon_url_by_type"></a>

## Function `icon_url_by_type`

Returns the icon url of coin by the type <code>CoinType</code>


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_icon_url_by_type">icon_url_by_type</a>&lt;CoinType: key&gt;(): <a href="_Option">option::Option</a>&lt;<a href="_String">string::String</a>&gt;
</code></pre>



<a name="0x3_coin_icon_url_by_type_name"></a>

## Function `icon_url_by_type_name`

Returns the icon url of the coin by the coin type name


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_icon_url_by_type_name">icon_url_by_type_name</a>(coin_type_name: &<a href="_String">string::String</a>): <a href="_Option">option::Option</a>&lt;<a href="_String">string::String</a>&gt;
</code></pre>



<a name="0x3_coin_is_same_coin"></a>

## Function `is_same_coin`

Return true if the type <code>CoinType1</code> is same with <code>CoinType2</code>


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_is_same_coin">is_same_coin</a>&lt;CoinType1, CoinType2&gt;(): bool
</code></pre>



<a name="0x3_coin_destroy_zero"></a>

## Function `destroy_zero`

Destroys a zero-value coin. Calls will fail if the <code>value</code> in the passed-in <code><a href="coin.md#0x3_coin">coin</a></code> is non-zero
so it is impossible to "burn" any non-zero amount of <code><a href="coin.md#0x3_coin_Coin">Coin</a></code>.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_destroy_zero">destroy_zero</a>&lt;CoinType: key&gt;(zero_coin: <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;)
</code></pre>



<a name="0x3_coin_extract"></a>

## Function `extract`

Extracts <code>amount</code> from the passed-in <code><a href="coin.md#0x3_coin">coin</a></code>, where the original coin is modified in place.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_extract">extract</a>&lt;CoinType: key&gt;(<a href="coin.md#0x3_coin">coin</a>: &<b>mut</b> <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;, amount: <a href="">u256</a>): <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;
</code></pre>



<a name="0x3_coin_extract_all"></a>

## Function `extract_all`

Extracts the entire amount from the passed-in <code><a href="coin.md#0x3_coin">coin</a></code>, where the original coin is modified in place.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_extract_all">extract_all</a>&lt;CoinType: key&gt;(<a href="coin.md#0x3_coin">coin</a>: &<b>mut</b> <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;): <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;
</code></pre>



<a name="0x3_coin_merge"></a>

## Function `merge`

"Merges" the two given coins.  The coin passed in as <code>dst_coin</code> will have a value equal
to the sum of the two coins (<code>dst_coin</code> and <code>source_coin</code>).


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_merge">merge</a>&lt;CoinType: key&gt;(dst_coin: &<b>mut</b> <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;, source_coin: <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;)
</code></pre>



<a name="0x3_coin_value"></a>

## Function `value`

Returns the <code>value</code> passed in <code><a href="coin.md#0x3_coin">coin</a></code>.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_value">value</a>&lt;CoinType: key&gt;(<a href="coin.md#0x3_coin">coin</a>: &<a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;): <a href="">u256</a>
</code></pre>



<a name="0x3_coin_zero"></a>

## Function `zero`

Create a new <code><a href="coin.md#0x3_coin_Coin">Coin</a>&lt;CoinType&gt;</code> with a value of <code>0</code>.


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_zero">zero</a>&lt;CoinType: key&gt;(): <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;
</code></pre>



<a name="0x3_coin_coin_info"></a>

## Function `coin_info`

Borrow the CoinInfo<CoinType>


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_coin_info">coin_info</a>&lt;CoinType: key&gt;(): &<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;
</code></pre>



<a name="0x3_coin_get_coin_info_by_type_name"></a>

## Function `get_coin_info_by_type_name`



<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_get_coin_info_by_type_name">get_coin_info_by_type_name</a>(coin_type_name: &<a href="_String">string::String</a>): <a href="_Option">option::Option</a>&lt;<a href="_ObjectID">object::ObjectID</a>&gt;
</code></pre>



<a name="0x3_coin_upsert_icon_url"></a>

## Function `upsert_icon_url`

This function is protected by <code>private_generics</code>, so it can only be called by the <code>CoinType</code> module.


<pre><code>#[private_generics(#[CoinType])]
<b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_upsert_icon_url">upsert_icon_url</a>&lt;CoinType: key&gt;(coin_info_obj: &<b>mut</b> <a href="_Object">object::Object</a>&lt;<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;&gt;, icon_url: <a href="_String">string::String</a>)
</code></pre>



<a name="0x3_coin_register_extend"></a>

## Function `register_extend`

Creates a new Coin with given <code>CoinType</code>
This function is protected by <code>private_generics</code>, so it can only be called by the <code>CoinType</code> module.


<pre><code>#[private_generics(#[CoinType])]
<b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_register_extend">register_extend</a>&lt;CoinType: key&gt;(name: <a href="_String">string::String</a>, symbol: <a href="_String">string::String</a>, icon_url: <a href="_Option">option::Option</a>&lt;<a href="_String">string::String</a>&gt;, decimals: u8): <a href="_Object">object::Object</a>&lt;<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;&gt;
</code></pre>



<a name="0x3_coin_init_metadata"></a>

## Function `init_metadata`

This function for the old code to initialize the CoinMetadata


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_init_metadata">init_metadata</a>&lt;CoinType: key&gt;(coin_info: &<a href="_Object">object::Object</a>&lt;<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;&gt;)
</code></pre>



<a name="0x3_coin_mint"></a>

## Function `mint`

Public coin can mint by anyone with the mutable Object<CoinInfo<CoinType>>


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_mint">mint</a>&lt;CoinType: store, key&gt;(coin_info: &<b>mut</b> <a href="_Object">object::Object</a>&lt;<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;&gt;, amount: <a href="">u256</a>): <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;
</code></pre>



<a name="0x3_coin_mint_extend"></a>

## Function `mint_extend`

Mint new <code><a href="coin.md#0x3_coin_Coin">Coin</a></code>, this function is only called by the <code>CoinType</code> module, for the developer to extend custom mint logic


<pre><code>#[private_generics(#[CoinType])]
<b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_mint_extend">mint_extend</a>&lt;CoinType: key&gt;(coin_info: &<b>mut</b> <a href="_Object">object::Object</a>&lt;<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;&gt;, amount: <a href="">u256</a>): <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;
</code></pre>



<a name="0x3_coin_burn"></a>

## Function `burn`

Public coin can burn by anyone with the mutable Object<CoinInfo<CoinType>>


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_burn">burn</a>&lt;CoinType: store, key&gt;(coin_info: &<b>mut</b> <a href="_Object">object::Object</a>&lt;<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;&gt;, <a href="coin.md#0x3_coin">coin</a>: <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;)
</code></pre>



<a name="0x3_coin_burn_extend"></a>

## Function `burn_extend`

Burn <code><a href="coin.md#0x3_coin">coin</a></code>
This function is only called by the <code>CoinType</code> module, for the developer to extend custom burn logic


<pre><code>#[private_generics(#[CoinType])]
<b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_burn_extend">burn_extend</a>&lt;CoinType: key&gt;(coin_info: &<b>mut</b> <a href="_Object">object::Object</a>&lt;<a href="coin.md#0x3_coin_CoinInfo">coin::CoinInfo</a>&lt;CoinType&gt;&gt;, <a href="coin.md#0x3_coin">coin</a>: <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;)
</code></pre>



<a name="0x3_coin_unpack"></a>

## Function `unpack`



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="coin.md#0x3_coin_unpack">unpack</a>&lt;CoinType: key&gt;(<a href="coin.md#0x3_coin">coin</a>: <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;): <a href="">u256</a>
</code></pre>



<a name="0x3_coin_pack"></a>

## Function `pack`



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="coin.md#0x3_coin_pack">pack</a>&lt;CoinType: key&gt;(value: <a href="">u256</a>): <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;
</code></pre>



<a name="0x3_coin_convert_coin_to_generic_coin"></a>

## Function `convert_coin_to_generic_coin`



<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_convert_coin_to_generic_coin">convert_coin_to_generic_coin</a>&lt;CoinType: key&gt;(<a href="coin.md#0x3_coin">coin</a>: <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;): <a href="coin.md#0x3_coin_GenericCoin">coin::GenericCoin</a>
</code></pre>



<a name="0x3_coin_convert_generic_coin_to_coin"></a>

## Function `convert_generic_coin_to_coin`



<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_convert_generic_coin_to_coin">convert_generic_coin_to_coin</a>&lt;CoinType: key&gt;(<a href="coin.md#0x3_coin">coin</a>: <a href="coin.md#0x3_coin_GenericCoin">coin::GenericCoin</a>): <a href="coin.md#0x3_coin_Coin">coin::Coin</a>&lt;CoinType&gt;
</code></pre>



<a name="0x3_coin_check_coin_info_registered_by_type_name"></a>

## Function `check_coin_info_registered_by_type_name`



<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_check_coin_info_registered_by_type_name">check_coin_info_registered_by_type_name</a>(coin_type: <a href="_String">string::String</a>)
</code></pre>



<a name="0x3_coin_is_registered_by_type_name"></a>

## Function `is_registered_by_type_name`



<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_is_registered_by_type_name">is_registered_by_type_name</a>(coin_type: <a href="_String">string::String</a>): bool
</code></pre>



<a name="0x3_coin_generic_coin_value"></a>

## Function `generic_coin_value`



<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_generic_coin_value">generic_coin_value</a>(<a href="coin.md#0x3_coin">coin</a>: &<a href="coin.md#0x3_coin_GenericCoin">coin::GenericCoin</a>): <a href="">u256</a>
</code></pre>



<a name="0x3_coin_unpack_generic_coin"></a>

## Function `unpack_generic_coin`



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="coin.md#0x3_coin_unpack_generic_coin">unpack_generic_coin</a>(<a href="coin.md#0x3_coin">coin</a>: <a href="coin.md#0x3_coin_GenericCoin">coin::GenericCoin</a>): (<a href="_String">string::String</a>, <a href="">u256</a>)
</code></pre>



<a name="0x3_coin_pack_generic_coin"></a>

## Function `pack_generic_coin`



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="coin.md#0x3_coin_pack_generic_coin">pack_generic_coin</a>(coin_type: <a href="_String">string::String</a>, value: <a href="">u256</a>): <a href="coin.md#0x3_coin_GenericCoin">coin::GenericCoin</a>
</code></pre>



<a name="0x3_coin_merge_generic"></a>

## Function `merge_generic`

"Merges" the two given generic coins.  The coin passed in as <code>dst_coin</code> will have a value equal
to the sum of the two generic coins (<code>dst_coin</code> and <code>source_coin</code>).


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_merge_generic">merge_generic</a>(dst_coin: &<b>mut</b> <a href="coin.md#0x3_coin_GenericCoin">coin::GenericCoin</a>, source_coin: <a href="coin.md#0x3_coin_GenericCoin">coin::GenericCoin</a>)
</code></pre>



<a name="0x3_coin_coin_type"></a>

## Function `coin_type`

Helper function for getting the coin type name from a GenericCoin


<pre><code><b>public</b> <b>fun</b> <a href="coin.md#0x3_coin_coin_type">coin_type</a>(<a href="coin.md#0x3_coin">coin</a>: &<a href="coin.md#0x3_coin_GenericCoin">coin::GenericCoin</a>): <a href="_String">string::String</a>
</code></pre>
