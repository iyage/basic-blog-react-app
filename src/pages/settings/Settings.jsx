
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import img from '../../images/271871166_2044402485734007_7144193533059826889_n.jpeg'
import SideBar from '../siderbar/SideBar'
import './settings.css'
const Container = styled.div`
display:flex;
justify-content: space-between;
`
const SettingsContainer = styled.div`
flex:9;
display: flex;
flex-direction: column;
padding: 20px;
`
const SettingsHeader = styled.div`
display: flex;
justify-content: space-between;
color: #ed9bab;
margin: 20px 0;

`
const SettingsProfilePics = styled.div`
position:relative;
& >label>.profileIcon{
    position: absolute;
    top: 30%;
    /* left: 120px; */
    margin-left: 10px;
    font-size: 25px;
    color: tomato;
    cursor: pointer;
}
`
const SettingsForm = styled.form`

`
const Title  = styled.h3`
    font-size: 30px;
    font-weight: 400;
    font-family: cursive;
`
const ProfilePics = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 30px;
`
const DelAcct = styled.h5`
      cursor: pointer;
`
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    & > input{
        height: 50px;
        margin: 10px 0;
        font-size: 30px;
        border: none;
        border-bottom: #d2cece solid 1px;
    }
    & > input:focus{
        outline: none;
    }
    & > input::placeholder{
        color: #d2cece;
    }
    &>label{
        font-size: 20px;
        margin-top: 10px;
    }
    &>button{
        width: 30%;
        margin: auto;
        height: 40px;
        margin-top: 20px;
        border-radius: 10px;
        border: none;
        background-color: teal;
        color: white;
        font-size: 20px;
        cursor: pointer;
        font-weight: 300;
    }
`
// const 
function Settings() {
  return (
    <Container>
        <SettingsContainer>
            <SettingsHeader>
                    <Title>Update Your Account</Title>
                    <DelAcct>Delete Account</DelAcct>
            </SettingsHeader>
            <SettingsProfilePics>
            <ProfilePics src={img} />
                <label htmlFor="profil-img">
                <FontAwesomeIcon icon={faCircleUser} className='profileIcon'/>
                </label>
                <input type="file" name="" id="profil-img" accept='image/*' hidden />
            </SettingsProfilePics>
            <SettingsForm>
                <FormGroup>
                <label htmlFor="user-name">Username</label>
                <input type="text" placeholder='Johndoe'  id='user-name'/>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='yag@gmail.com'  id='email'/>
                <label htmlFor="password">Password</label>
                <input type="password"  id='password'/>
                 <button type='submit'>Update</button>
                </FormGroup>
           
            </SettingsForm>
        </SettingsContainer>
        <SideBar/>
    </Container>
  )
}

export default Settings