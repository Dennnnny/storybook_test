import React  from 'react' ;
import styled from 'styled-components';

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    position: relative;

    label {
        font-size: 14px;
        color: #212121;
    }

    .input-form {
        position: relative;
    }

    .error-hint {
        font-size: 12px;
        color: #f00037;
    }

`

const Inputs = styled.input`
    height:${ props => props.lineheight? '66px':'44px' };
    width: 100%;
    border-radius: 4px;
    border: solid 1px ${props=> props.errors? 'red': '#ccc' };
    background-color: #fafafa;
    padding: 11px 12px;
    font-size: 16px;
    margin: 4px 0;
    position: relative;

    ::placeholder {
        color: #ccc;
    }
    :focus {
        outline: none;
        border: solid 1px #00aeef;
        background-color: #fafafa;
        caret-color: #00aeef;
    }

    

`

function Input ({label,inputName,inputType,inputMode,register,errors,setUserInput,placeHolder,userInput}) {

    // console.log(userInput)
    return(

        <InputGroup>
            <label>{label}</label>
            <Inputs name={inputName} type={inputType} 
            inputMode={inputMode}
            ref={register} placeholder={placeHolder}
            errors={errors[inputName]}
            onBlur={(e)=>setUserInput(e.target.value)}
            value={userInput}
            />
            {errors[inputName] ? null : userInput === '' ? null : <div className='check'></div>}

            {errors[inputName] && errors[inputName].type ==="pattern" && <p className='error-hint'>格式錯誤</p>}
            {errors[inputName] && errors[inputName].type ==="required" && <p className='error-hint'>必填欄位</p>}
        </InputGroup>



        // <div>
        //     <label>收件人姓名</label>
        //     <input name="userName" type="text" 
        //     inputMode=""
        //     ref={register} placeholder="請填寫真實姓名" 
        //     errors={errors.userName}
        //     onBlur={(e)=>setUserName(e.target.value)}
        //     />
        //     {errors.userName ? null : userName ===''? null : <div className='check'></div>}
        //     {errors.userName && <p className='error-hint'>必填欄位</p>}
        // </div>

       
    )
}

export default Input;