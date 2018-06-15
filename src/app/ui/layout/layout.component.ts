import { Component, Injectable, OnInit } from '@angular/core';
import * as Web3 from 'web3'; 

declare let require: any;
declare let window: any;
let tokenAbi = {"key": '3'};//HARDCODE HERE


@Injectable()
export class ContractsService {
  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0xbc84f3bf7dd607a37f9e5848a6333e6c188d926c";

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);

      if (this._web3.version.network !== '4') {
        alert('Please connect to the Rinkeby network');
      }
    } else {
      this._web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
  }

  private async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;

      this._web3.eth.defaultAccount = this._account;
    }

    return Promise.resolve(this._account);
  }

  public async getHelloWorld(): Promise<string> {
    let account = await this.getAccount();

    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.returnHelloWorld.call(account, function (err, result) {
        if(err != null) {
          reject(err);
        }

        resolve(_web3.fromWei(result));
      });
    }) as Promise<string>;
  }
}


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  ngOnInit() {
  }

}
