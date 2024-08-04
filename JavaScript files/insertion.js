var d = document.getElementById('messages');

async function insertion(){
    d.innerHTML = 'Insertion sort selected.';
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = '#5CED73';
    for(let i = 1; i < ele.length; i++){
        d.innerHTML = 'Inserting element at index ' + i + ' at its proper position in the sorted section. Hence making it the key.';
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = '#143796';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            if(isStop) break;
            d.innerHTML = 'Placing the element at index ' + i+ '. As the element at index '+(j)+' is greater than the key, it is placed one position ahead.';
            // color
            ele[j].style.background = '#143796';
            ele[j + 1].style.height = ele[j].style.height;
            ele[j+1].style.background = '#5CED73';
            j--;

            await waitforme(delay);
            await waitWhilePaused(); // Pause-checking delay

            // color
            // for(let k = i; k >= 0; k--){
            //     ele[k].style.background = '#B8D7A3';
            // }
        }
        if(isStop) break;
        await waitWhilePaused(); // Pause-checking delay
        ele[j + 1].style.height = key;
        // color
        ele[j+1].style.background = '#5CED73';
        ele[i].style.background = '#5CED73';
        d.innerHTML = 'Hence the position of the key (index '+i+' ) in the sorted part is ' + (j+1) + '. Hence placing the key there.' ;
        //await delay(delay);
    }

    if(isStop){
        d.innerHTML = 'Once you start the sorting, the messages will be shown here';
        isStop = false;
    }
    else{
        d.innerHTML = 'Insertion sort completed. Array is sorted.'
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click',function(){
    d.innerHTML = 'Insertion sort is selected.'
    document.querySelector(".sort").disabled = false;
    isInsertion = true;
    isBubble = false;
    isSelection = false;
});
