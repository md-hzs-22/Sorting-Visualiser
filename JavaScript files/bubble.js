var d = document.getElementById('messages');

async function bubble() {
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){
            if(isStop) break;
            d.innerHTML = 'Checking for element at index ' + j + ' and ' + (j+1);
            ele[j].style.background = '#FFD700';
            ele[j+1].style.background = '#FFD700';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                d.innerHTML = 'As element at index '+ (j+1) +' is smaller than '+ (j) +', it gets swapped';
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            else{
                d.innerHTML = 'As element at index '+ (j+1) +' is greater than '+ (j) +', it stays as it is';
                await waitforme(delay);
            }
            await waitWhilePaused(); // Pause-checking delay
            ele[j].style.background = '#A1C3D1';
            ele[j+1].style.background = '#A1C3D1';
        }
        if(isStop) break;
        ele[ele.length-1-i].style.background = '#5CED73';
        d.innerHTML = 'Last '+ (i+1) + ' are swapped';
        await waitforme(delay);
        await waitWhilePaused(); // Pause-checking delay
    }
    if(isStop){
        d.innerHTML = 'Once you start the sorting, the messages will be shown here';
        isStop = false;
    }
    else{
        await waitWhilePaused(); // Pause-checking delay
        ele[0].style.background = '#B8D7A3';
        d.innerHTML = 'Bubble sort completed. The array is sorted' ;
    }
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click',function(){
    d.innerHTML = 'Bubble sort is selected.'
    document.querySelector(".sort").disabled = false;
    isBubble = true;
    isStop = false;
    isSelection = false;
    isInsertion = false;
});

