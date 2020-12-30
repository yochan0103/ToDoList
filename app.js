'use strict'

const inputmemo = document.getElementsByClassName(input);
const editmemo = document.getElementsByClassName(edit);
const deletememo = document.getElementsByClassName(remove);
const list = document.querySelector('.todo-box');

function MakeList(){
    const li = document.createElement('li');
    li.classname = 'input-list';

    const ul = document.querySelector('.do-list');

    var inputTask = document.querySelector('.textform');
    li.innerText = inputTask.value;

    const doneButton = document.createElement('input');
    doneButton.setAttribute('type', 'checkbox');

    // doneButton.innerText = '完了';
    li.appendChild(doneButton);

    //親要素に子要素を入れる 
    ul.appendChild(li);
    
    // チェックされたら線を書いて消す
    doneButton.addEventListener('change', () =>{
        if(doneButton.checked){
            li.classList.add('doneButton');
            const deleteButton = document.createElement('button');
            deleteButton.innerText = '削除';
            deleteButton.classList.add('deleteButton');
            li.appendChild(deleteButton);

            deleteButton.addEventListener('click',() =>{
                li.remove();
            })
            
        }
    })

    // doneButton.addEventListener('change', () =>{
    //     if(doneButton.checked){
    //         $('.li').insertAfter('.li_f');
    //     }
    // })
    

}
