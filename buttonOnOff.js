
const changementBtn = () => {
    const wrap = 
        document.querySelector('.btn')

        wrap.addEventListener('click',() =>{
            modeNuit()
        })
    }
        const modeNuit = () => {

            document.querySelectorAll('body').forEach(body => {
                body.classList.toggle('bodyNuit')
            })
            document.querySelectorAll('.btn').forEach(btn => {
                btn.classList.toggle('btnNuit')
            })
            document.querySelectorAll('.wrapSection').forEach(wrapSection => {
                wrapSection.classList.toggle('wrapSectionNuit')
            })
            
            document.querySelectorAll('.wrapArticle').forEach(wrapArticle => {
                wrapArticle.classList.toggle('wrapArticleNuit')
            })

            document.querySelectorAll('.titre').forEach(titre => {
                titre.classList.toggle('titreNuit')
            })

            document.querySelectorAll('.para').forEach(para => {
                para.classList.toggle('paraNuit')
            })
            document.querySelectorAll('div').forEach(div => {
                div.classList.toggle('divNuit')
            })

        }
        changementBtn()
