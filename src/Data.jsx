import React from 'react'

function Data() {
    function forSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const name = formData.get("for-name")
        const surname = formData.get("for-surname")
        const email = formData.get("for-email")
        const gender = formData.get("for-gender")
        const age = formData.get("for-age")
        const password = formData.get("for-password")
        const passAcc = formData.get("for-password-accuracy")
        let isEverythingClear = 0
        let isNameWasWrotten = false
        let isSurnameWasWrotten = false
        name.length > 0 && (isNameWasWrotten = true)
        surname.length > 0 && (isSurnameWasWrotten = true)
        !isNameWasWrotten && alert("Please enter your Name")
        !isNameWasWrotten && isEverythingClear++
        !isSurnameWasWrotten && alert("Please enter your Surname")
        !isSurnameWasWrotten && isEverythingClear++
        password.length < 8 && alert("Password must be at least 8 characters long")
        password.length < 8 && isEverythingClear++
        let isPasswordAccuracy = password == passAcc
        !isPasswordAccuracy && alert("Please write password correct")
        !isPasswordAccuracy && isEverythingClear++
        isEverythingClear == 0 && alert("Thanks for signing up!<3")
        e.target.reset()
    }
    return (
        <div className="border-black bg-slate-200 rounded-2xl flex flex-col justify-center items-center gap-4 w-[400px] h-[400px]">
            <form onSubmit={forSubmit}>
                <div className="flex justify-center items-center flex-col gap-4">
                    <label htmlFor="for-name" className="gap-2">
                        Name :
                        <input type="name" name='for-name' id='for-name' placeholder='Name' />
                    </label>
                    <label htmlFor="for-surname">
                        Surname :
                        <input type="surname" name='for-surname' id='for-surname' placeholder='Surname' className="rounded" />
                    </label>
                    <label htmlFor="for-email">
                        Email :
                        <input type="email" name="for-email" id='for-email' placeholder='Email' className="rounded" />
                    </label>
                    <label htmlFor="for-gender">
                        Gender :
                        <select name="for-gender" id="for-gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    <label htmlFor="for-age">
                        Age :
                        <input type="number" name="for-age" id="for-age" placeholder='Age' className="rounded" />
                    </label>
                    <label htmlFor="for-password">
                        Password :
                        <input type="password" name="for-password" id="for-password" placeholder='Password' className="rounded" />
                    </label>
                    <label htmlFor="for-password-accuracy">
                        Password Accuracy :
                        <input type="password" name="for-password-accuracy" id="for-password-accuracy" />
                    </label>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Data