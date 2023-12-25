import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getDefaultProvider } from 'ethers';
import { requestAccounts } from 'react-native-ethereum-remote-connection';

const provider = getDefaultProvider('rinkeby'); // or any Ethereum network of your choice

export default function Transaction() {
  const [defaultAccount, setDefaultAccount] = useState('');
  const [userBalance, setUserBalance] = useState(null);

  const requestAccount = async () => {
    console.log('Requesting account...'); 
    try {
      const accounts = await requestAccounts();
      accountChanged(accounts[0]);
    } catch (error) {
      console.log('Error requesting account:', error);
    }
  };

  const accountChanged = async (accAddress) => {
    setDefaultAccount(accAddress);
    await getUserBalance(accAddress);
  };

  const getUserBalance = async (accountAddress) => {
    try {
      const balance = await provider.getBalance(accountAddress);
      setUserBalance(balance.toString());
    } catch (error) {
      console.log('Error getting balance:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Connect to Wallet</Text>
      <TouchableOpacity onPress={requestAccount} style={{ marginTop: 20 }}>
        <Text>Click to connect</Text>
      </TouchableOpacity>
      <Text style={{ color: 'blue' }}>Wallet Address: {defaultAccount}</Text>
      <Text style={{ color: 'blue' }}>Balance: {userBalance}</Text>
    </View>
  );
}
