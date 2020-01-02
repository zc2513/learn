const templateElem = document.createElement('template')
          templateElem.innerHTML = `
            <style>
                :host {
                    display: flex;
                    align-items: center;
                    width: 450px;
                    height: 180px;
                    background-color: #d4d4d4;
                    border: 1px solid #d5d5d5;
                    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
                    border-radius: 3px;
                    overflow: hidden;
                    padding: 10px;
                    box-sizing: border-box;
                    font-family: 'Poppins', sans-serif;
                }
                .image {
                    flex: 0 0 auto;
                    width: 160px;
                    height: 160px;
                    vertical-align: middle;
                    border-radius: 5px;
                }
                .container {
                    box-sizing: border-box;
                    padding: 20px;
                    height: 160px;
                }
                .container > .name {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 1;
                    margin: 0;
                    margin-bottom: 15px;
                }
                .container > .email {
                    font-size: 12px;
                    opacity: 0.75;
                    line-height: 1;
                    margin: 0;
                    margin-bottom: 15px;
                }
                .container > .button {
                    padding: 10px 25px;
                    font-size: 12px;
                    border-radius: 5px;
                    text-transform: uppercase;
                    cursor: pointer;
                }
                </style>
                
                <img class="image">
                <div class="container">
                    <p class="name"></p>
                    <p class="email"></p>
                    <button class="button">上传图片</button>
                </div>`
 
    /**
     * @description <user-card></user-card> 自定义标签
     * @author zc2513
     * @date 2020-01-02
     * @class UserCard
     * @extends {HTMLElement}
     */
    class UserCard extends HTMLElement {
        constructor() {
            super(); 
            this._shadowRoot = this.attachShadow( { mode: 'closed' } );
            this._content = templateElem.content.cloneNode(true);   
            this.$img = this._content.querySelector('.image')
            this.$name = this._content.querySelector('.name')
            this.$email = this._content.querySelector('.email')
            this._content.querySelector('.button').onclick=()=>{  
                this.imgBase64 = '设置的存储值' 
                let artway = this.getAttribute('onTest')
                eval(`${artway}('传入的值')`)
            } 
            this._shadowRoot.appendChild(this._content); 
        }  
        get src(){
            return this.getAttribute('src');
        }
        get name(){
            return this.getAttribute('name');
        }
        get email(){
            return this.getAttribute('email');
        }

        static get observedAttributes() { 
            return ['src','name','email'];
        }

        attributeChangedCallback(name, oldVal, newVal) {   
            this.render();
        }

        render() {    
            this.$img.src = this.src   
            this.$name.innerHTML = this.name  
            this.$email.innerHTML = this.email 
        }   

        rbase64(){
            return this.imgBase64
        }
        
        
    }
    window.customElements.define('user-card', UserCard);