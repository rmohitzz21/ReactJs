function customRender(reactElement, container){
    const domElemnt = document.createElement(reactElement.type)
    domElemnt.innerHTML = reactElement.children
    // domElemnt.setAttribute('href',reactElement.props.href)
    // domElemnt.setAttribute('target',reactElement.props.target)
    
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; {
            domElemnt.setAttribute(prop, reactElement.props[prop])            
        }
    }

    container.appendChild(domElemnt)
}

const reactElement = {
    
    type : 'a',
    props : {
        href : 'http://google.com',
        target : '_blank'
    },
    children: 'Click me to Visit Google'
}


const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer)
