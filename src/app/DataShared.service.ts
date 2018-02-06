import { Subject } from 'rxjs/Subject';

export class SharedDataService{
	constructor(){}
	dataObject ={};
	cartData = [];
	cartUpdate = new Subject();
	setData(key, value){
		this.dataObject[key] = value;
	}

	getData(key){
		return this.dataObject[key];
	}

	setCartData(object, flag){
		if(this.cartData.length > 0){
			for(var i=0; i<this.cartData.length;  i++){
				if(this.cartData[i].itemId == object.itemId){
					this.cartData[i].quantity = flag ? this.cartData[i].quantity+1 : this.cartData[i].quantity-1;
					if(this.cartData[i].quantity == 0){
						this.cartData.splice(i,1);
					}
					break;
				} else if(i==this.cartData.length-1){
					object.quantity = 1;
					this.cartData.push(object);
					break;
				}
			}
		}else{
			object.quantity = 1;
			this.cartData.push(object);
		}
		this.cartUpdate.next(this.cartData);
	}


	

	getCartData(){
		return this.cartData;
	}

	

	
}