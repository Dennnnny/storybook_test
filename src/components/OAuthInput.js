import React from 'react'
import styled from 'styled-components'

const InputArea = styled.div`
    position: relative;
    font-size: 15px;
    color: #212121;
    margin-bottom: 20px;
    display:flex;
    flex-direction:column;

    label {
        margin: 4px 0;
    }

    .checked {
        position: absolute;
        width: 13px;
        height: 5px;
        border-bottom: 2px solid #00aeef;
        border-left: 2px solid #00aeef;
        transform: rotate(-45deg);
        margin: 0;
        right:15.5px;
        bottom: 20px;
    }
    .error {
        color: red;
        font-size: 12px;
        margin: 4px 0;
    }

    .eye {
        position: absolute;
        right:15.5px;
        bottom: 15px;
    }

`

const Input = styled.input`
    height:24px;
    padding: 10px 12px 10px 16px;
    border-radius: 4px;
    border: solid 1px ${props=> props.error? `red`:`#ccc`};
    background-color: #fafafa;
    font-size:17px;
    
    ::placeholder {
        color: #ccc;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
    }

    :focus{
        outline: none;
        border: 1px solid #00aeef;
        caret-color: #00aeef;
    }
`

export default function OAuthInput ({type,inputLabel,placeHolder,userInput,check,userName,error,setUserInput,passwordVisibility,visibility}) {
    return(
        <>
            <InputArea >
                <label>{inputLabel}</label>
                <Input 
                    type={type}
                    placeholder={placeHolder}
                    value={userInput}
                    error={error[userName] ? true:false}
                    onBlur={e=>setUserInput(e.target.value)}
                />
                {check? <div className="checked"></div>:null}
                {userName === 'userPassword' && (type === 'password' && visibility  ? <div onClick={()=> passwordVisibility(t=>!t)} className="eye">O</div>:<div onClick={()=> passwordVisibility(t=>!t)} className="eye eye-slash">Q</div>)}
                {error[userName] && error[userName].type === 'required' && <div className="error">必填欄位</div>}
                {error[userName] && error[userName].type === 'pattern' && <div className="error">格式錯誤</div>}

            </InputArea>
        </>
    )
}