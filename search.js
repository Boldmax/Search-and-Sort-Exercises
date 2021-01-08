function indexFinder(array, value){
    for(i = 0; i < array.length; i++){
        if(array[i] === value){
        return array[i].length;
        } else {
            return -1
        }
    }
}

/* var bee = [3,4];
bee.length */