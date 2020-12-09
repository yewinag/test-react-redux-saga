import { dataSet } from '../constants';

export function filterDataFun(params){    
    if(params == 'all'){
        return dataSet;
    }else{
        return dataSet.filter((item)=> item.keyword === params);
    }    
}