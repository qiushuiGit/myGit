
export default function (state=[],action) {
    let newState = Object.assign([],state)
    let data = action.data

    switch (action.type) {
        case 'CART_ADD':

            let isExist = newState.some(item=>{

                if(item.shopId === data.shopId && item.foodId === data.foodId){

                    item.count += 1
                    return true
                }

                return false
            })

            if(!isExist) {
                !data.count && (data.count = 1);
                 newState.push(data);
            }


            return newState
        case 'CART_REDUCE':
            newState.some(item=>{
                if(item.shopId === data.shopId && item.foodId === data.foodId){

                    data.count ? (item.count = data.count) : (item.count -= 1);

                    return true
                }
                return false
            })

            return newState
        default:
            return newState
    }
}