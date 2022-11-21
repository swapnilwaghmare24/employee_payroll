<template>
  <div>
    <form @submit.prevent="submitForm">
      
            <div class="formInput">
                <label for="userName">Name</label>
                <input v-model="userName" type="text" name="userName" id="userName" placeholder="Type your Name" required />
            </div>

        <div class="formInput">
                <label for="profile">Profile</label>
                <div class="formRadioContent">
                    <span>
                        <input v-model="profile" type="radio" name="profile" id="profile1" value="../assets/pic1.png" required />
                        <img class="profileImg" src="../assets/pic1.png" />
                    </span>
                    <margin></margin>
                    <span>
                        <input  v-model="profile" type="radio" name="profile" id="profile2" value="../assets/pic2.png" required />
                        <img class="profileImg" src="../assets/pic2.png" />
                    </span>
                    <margin></margin>
                    <span>
                        <input  v-model="profile" type="radio" name="profile" id="profile3" value="../assets/pic3.png" required />
                        <img class="profileImg" src="../assets/pic3.png" />
                    </span>
                    <margin></margin>
                    <span>
                        <input  v-model="profile" type="radio" name="profile" id="profile4" value="../assets/pic4.png" required />
                        <img class="profileImg" src="../assets/pic4.png" />
                    </span>
                </div>
            </div>

            <div class="formInput">
                <label for="gender">Gender</label>
                <div class="formRadioContent">
                    <span>
                        <input  v-model="gender" type="radio" name="gender" id="genderM" value="Male" required />
                        <label>MALE</label>
                    </span>
                    <margin></margin>
                    <span>
                        <input v-model="gender" type="radio" name="gender" id="genderF" value="Female" required />
                        <label>FEMALE</label>
                    </span>
                </div>
            </div>

             <div class="formInput">
                <label for="department">Department</label>
                <div class="formCheckboxContent">
                    <span>
                        <input v-model="department" type="checkbox" name="department" id="hrd" value="HR" />
                        <label>HR</label>
                    </span>
                    <margin></margin>
                    <span>
                        <input v-model="department" type="checkbox" name="department" id="sales" value="Sales" />
                        <label>Sales</label>
                    </span>
                    <margin></margin>
                    <span>
                        <input v-model="department" type="checkbox" name="department" id="finance" value="Fianance" />
                        <label>Finance</label>
                    </span>
                    <margin></margin>
                    <span>
                        <input v-model="department" type="checkbox" name="department" id="engineer" value="Engineer" />
                        <label>Engineer</label>
                    </span>
                    <margin></margin>
                    <span>
                        <input v-model="department" type="checkbox" name="department" id="other" value="Other" />
                        <label>Other</label>
                    </span>
                </div>
            </div>

            <div class="formInput">
                <label for="salary">Salary</label>
                <div class="salaryContent">
                    <input v-model="salary" type="range" name="salary" id="salary" value="300000" min="200000" max="1000000" required />
                    <output class="salary_output">300000</output>
                </div>
            </div>

            <div class="formInput">
                <label for="startDate">Start date</label>
                <div class="startDateContent">
                    <select name="Day" id="day" v-model="day">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>

                    <select name="Month" id="month" v-model="month">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>

                    <select name="Year" id="year" v-model="year">
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                    </select>
                </div>
            </div>

            <div class="formInput">
                <label for="notes">Notes</label>
                <textarea name="notes" id="notes" class="input" style="height: 100px;" placeholder=""></textarea>
            </div>

            <div>
            <button v-on:click="submit()">submit</button>
            
            </div>
      
    </form>
    
    
  </div>
</template>
<script>



  export default {
    data() {
      return {
        userName: "",
        profile: "",
        gender: "",
        department:[],
        salary:'',
        day:'',
        month:'',
        year:''
        
      }
    },
    methods: {
      submit() {
       console.log(this.userName);
      console.log(this.profile);
      console.log(this.gender);
        console.log(this.department);
        console.log(this.salary);
        console.log(this.day+"/"+this.month+"/"+this.year);
           
      }
    },
  };
</script>
<style>
  header {
    display: flex;
    background-color: #FFFFFF;
    padding: 20px 20px;
}

.headerTitle {
    font-size: 22px;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    margin-left: 8px;
}

.headerLogo {
    height: 50px;
    width: 46px;
}

.header1 {
    color: #82A70C;
}

.header2 {
    color: #42515F;
}

.formContent {
    min-height: calc(100% - 80px);
    background-color: #F7F7F7;
    display: flex;
    justify-content: center;
    align-content: center;
}

.userForm {
    background-color: #FFFFFF;
    width: 65%;
    padding: 45px 150px;
    margin: 50px 0px;
    border-radius: 8px;
    box-shadow: 0px 3px 6px #00000029;
}

.formHeaderTitle {
    font-size: 28px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    color: #42515F;
}

label {
    color: #42515F;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    flex: 1;
}

.formInput {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.errorDiv {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    flex: 3;
    background-color: #FFFFFF;
    border: 1px solid #BDBDBD;
    border-radius: 3px;
    font: normal normal normal 18px/24px Roboto;
    padding: 10px 10px;
}

.input {
    flex: 3;
    background-color: #FFFFFF;
    border: 1px solid #BDBDBD;
    border-radius: 3px;
    font: normal normal normal 18px/24px Roboto;
    padding: 10px 10px;
}

.formRadioContent {
    flex: 3;
    display: flex;
    flex-flow: row;
}

.formCheckboxContent {
    flex: 3;
    display: flex;
    flex-flow: row;
}

.formRadioContent>span {
    display: flex;
    flex-flow: row;
    align-items: center;
}

.formCheckboxContent>span {
    display: flex;
    flex-flow: row;
    align-items: center;
}

.salaryContent {
    flex: 3;
    display: flex;
    align-items: center;
}

.startDateContent {
    flex: 3;
    display: flex;
    align-items: center;
}

select {
    padding: 12px 18px;
    border: 1px solid #BDBDBD;
    border-radius: 4px;
    font: normal normal normal 16px Roboto;
    letter-spacing: 0px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
}

.profileImg {
    width: 40px;
    margin-left: 8px;
}

margin {
    margin-left: 40px;
}

#month, #year {
    margin-left: 24px;
}

.buttonParent {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 10px;
}

.cancelButton {
    text-decoration: none;
    text-align: center;
}

.submitButton {
    margin-right: 30px;
    background-color: #F5F5F5;
    border: none;
}

.button {
    font-size: 20px;
    font-family: Roboto;
    letter-spacing: 0;
    color: #42515F;
    opacity: 1;
    background-color: transparent;
    border: none;
    font-weight: 400;
    min-width: 140px;
    padding: 7px 7px;
    border: 1px solid #969696;
    cursor: pointer;
}

@media only screen and (max-width: 850px) {
    .cancelButton {
        margin-left: 0px;
    }
    .userForm {
        width: 85%;
        padding: 44px 20px;
    }
}

@media only screen and (max-width: 600px) {
    .userForm {
        margin-top: 10px;
    }
    .formRadioContent {
        flex-flow: wrap;
    }

    .formCheckboxContent {
        flex-flow: wrap;
    }
    .submit-reset {
        width: 100%;
        display: flex;
        order: 1;
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .submitButton {
        margin: 0;
    }
    .buttonParent {
        flex-direction: column-reverse;
    }
}

.errorDiv > span {
    flex: 1;
}

error-output {
    flex: 3;
    color: red;
    font-size: 12px;
    font-style: italic;
    /* margin-left: 10px; */
    margin-top: 10px;
    min-width: 140px;
}

.add-button {
    background: #82A70C 0% 0% no-repeat padding-box;
    border-radius: 5px;
    padding: 5px 18px;
    text-align: left;
    font: normal normal normal 22px/29px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-decoration: none;
}

.main-content {
    display: flex;
    flex-direction: column;
    background-color: #F7F7F7;
    padding: 30px 0 10px;
}

.emp-detail-text {
    text-align: left;
    font: normal normal bold 20px/25px Roboto;
    letter-spacing: 0px;
    color: #42515F;
    opacity: 1;
    display: flex;
    flex-direction: row;
}

.emp-count {
    margin-left: 50px;
}

td,
th {
    text-align: left;
    padding: 5px 8px;
}

td img {
    cursor: pointer;
}

td img:first-child {
    margin-right: 10px;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 0px solid green;
}

.progileRow {
    display: flex;
    align-items: center;
}

</style>