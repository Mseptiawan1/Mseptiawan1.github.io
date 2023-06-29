let sampul = document.querySelector(".sampul")
sampul.textContent = "Besok aku akan solat id";



let input = document.querySelector('.input')

input.addEventListener('click',function input(){
})


input.addEventListener('onmouse',function input(){
    
})



// style pada body
document.body.className = "bg-slate-300"

let kirim = document.querySelector('.kirim')

let tombol = document.querySelector('.tombol');
tombol.addEventListener('click',function(){
    input.className = "block  h-10 rounded-lg mx-auto mt-5 border indent-1 font-sans border-black w-full"
    kirim.className = "mt-10 border w-20 ml-5 rounded-lg shadow-slate-800/20 font-bold bg-green-500 font-wawan active:bg-green-700 border-sky-50 hover:bg-green-700 hover:text-white"


})
let card = document.querySelector('.card')

kirim.addEventListener('click',function(){
    Swal.fire({
        icon: 'success',
        title:'OKE',
        text:'data disimpan'
    })
    let p = document.createElement('p')
    let todo = document.createTextNode(input.value)
    p.appendChild(todo)


    let kotak = document.createElement('div')
    kotak.className = "kotak  relative mx-auto rounded-lg border bg-slate-100  h-10 flex mt-2 justify-center items-center border-green-400 w-full";

    let hapus = document.createElement('div')
    hapus.addEventListener('click',function(){
        hapus.addEventListener('click',()=>[
            Swal.fire({
                title: 'Yakin mau dihapus?',
                text: 'data yang dihapus tidak dapat dikembalikan',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Hapus!'
              }).then((result) => {
                if (result.isConfirmed) {
                card.removeChild(kotak)

                  Swal.fire(
                    'Berhasil!',
                    'Kamu telah berhasil menghapus.',
                    'success'

                  )
                }
              })
        ])
    })
    let text = document.createTextNode("+");
    hapus.appendChild(text)
    hapus.className = " block absolute -top-[24px] -right-[15px] text-4xl rounded-full h-10 rotate-45 font-semibold text-red-600 hover:text-red-300  cursor-pointer"
    p.className ="sampul font-wawan text-center text-xs font-semibold";
    kotak.appendChild(hapus)
    kotak.appendChild(p)
    
    card.appendChild(kotak)
    kirim.className = "hidden"
    
    input.className = "hidden"

    
})



// menambahkan gambar pada body
document.body.style.backgroundImage = "url('notebook.jpg')"