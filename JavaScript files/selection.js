var d = document.getElementById('messages');

async function selection(){
    d.innerHTML = 'Selection sort is selected.'
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        d.innerHTML = 'Selecting appropriate element for index '+ i ;
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = '#FFD700';
        for(let j = i+1; j < ele.length; j++){
            if(isStop) break;
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = '#FFD700';

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                d.innerHTML = 'As element at index ' + j + ' is smaller than minimum, Making this red and the last minimum is set to default again.'
                ele[j].style.background = 'red';
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    await waitWhilePaused(); // Pause-checking delay
                    ele[min_index].style.background = '#A1C3D1';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                await waitWhilePaused(); // Pause-checking delay
                ele[j].style.background = '#A1C3D1';
            } 
            await waitWhilePaused(); // Pause-checking delay 
        }
        if(isStop) break;
        await waitWhilePaused(); // Pause-checking delay
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        d.innerHTML = 'The element at index ' + min_index + ' is appropriate. Hence swapping it with key index ' + i;
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = '#A1C3D1';
        // change the sorted elements color to green
        ele[i].style.background = '#5CED73';

    }
    if(isStop){
        d.innerHTML = 'Once you start the sorting, the messages will be shown here';
        isStop = false;
    }
    else{
        d.innerHTML = 'Selection sort is done. Array is sorted.'
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click',function(){
    d.innerHTML = 'Selection sort is selected.'
    document.querySelector(".sort").disabled = false;
    isSelection = true;
    isBubble = false;
    isInsertion = false;
    isStop = false;
});
