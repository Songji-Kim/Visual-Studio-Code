// getElementByIdは、任意のHTMLタグで指定したIDにマッチするドキュメント要素を取得するメソッド
const addBtn = document.getElementById('add')

// ？？？ランダム関数を使えばidは変わるのか…？
// .innerHTML=Math.floor(Math.random() * 100);
// 金が追加したconsole.log

console.log(addBtn , "getElementByIdで取得したID") 

// ローカルストレージからデータを取得する
const notes = JSON.parse(localStorage.getItem('notes'))

// メモ帳追加処理を実行
if(notes) {
    notes.forEach(note => addNewNote(note))
}

// 作成ボタンのクリックイベントの登録（アロー関数というらしい…）
// ？？？on.click.functionと同じ動きをしているという理解でいいのか？
addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    // div要素を作成
    const note = document.createElement('div')
 
    // ？？？noteクラスを追加
    note.classList.add('note')
    console.log(note , "ノートにクラスを追加")
    

    // // メモ帳を追加
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    // 2‐0.以下、メモ帳を削除する機能。
    // 2-1.操作に必要な要素を取得
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    // 3-0.編集も途中に入る
    // 3-1.テキストエリアに引数で渡したテキストを代入
    // 3-1.新規/編集があるのでこうしている
    textArea.value = text
    // markedは、HTMLに追加したプラグイン
    main.innerHTML = marked(text)


    // 2-2.削除のクリックイベントの登録
    deleteBtn.addEventListener('click', () => {
      deleteNote(note)
    })
 

    // 3-2.編集ボタンのクリックイベント
    editBtn.addEventListener('click', () => {
        editNote(main, textArea)
      })

    // 3-3.テキストエリアのイベント
    textArea.addEventListener('input', (e) => {
        const { value } = e.target
 
        main.innerHTML = marked(value)

    // 3-4.ローカルストレージの更新
        updateLS()
    })


    // bodyの子要素として追加
    // ？？？この関数があることで、新しいノートができる。noteは、cssを当てている。
    document.body.appendChild(note)

}


// ローカルストレージにメモ帳を保存
function updateLS() {
    // 要素を取得
    const notesText = document.querySelectorAll('textarea')
 
    const notes = []
 
    // 要素を格納
    notesText.forEach(note => notes.push(note.value))
 
    // notesという名前でローカルストレージを保存
    localStorage.setItem('notes', JSON.stringify(notes))
}


// 2-3.メモ帳削除
    function deleteNote(note) {
    // 2-4.ノートを削除
    note.remove()
  

    // 2-4.ローカルストレージの更新
    // ？？？LSでローカルストレージ？
    updateLS()
}


// メモ帳編集
    function editNote(main, textArea) {
    
    // hiddenがついているものは消し、ついてないものは付与する
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
}
