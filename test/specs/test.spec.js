import {Given, When, Then} from '@wdio/cucumber-framework';

Given('User opens the Appointment Planner dashboard page', async()=>{
    await browser.setWindowSize(1920, 1080);
    await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
});

Then('The paga title should be  Appointment Planner', async()=>{
    const title = await browser.getTitle();
    expect(title).toEqual('Appointment Planner - Syncfusion Angular Components Showcase App');
});

When('User move to the Doctors section', async()=>{
    await $("div.doctors").click();
});

When('User clicks the Add Doctor button', async()=>{
    const button = await $("button=Add New Doctor");
    await button.waitForDisplayed({ timeout: 20000 });
    await button.waitForClickable({ timeout: 10000 });
    await button.scrollIntoView();
    await button.click();
});

When('User enters name  to input', async()=>{
    const nameInput = await $("input[name='Name']");
    await nameInput.setValue("John Doe");
    await browser.pause(500);
    await nameInput.setValue("Doe John Smith");
    await browser.pause(500);
    await nameInput.addValue("Michael Smith");
})

When('User saves the doctor', async () => {
    await $("//button[text()='Save']").click();
});

Then(/^an email error is shown$/, async () => {
    const emailError = await $("label#Email-info");
    expect(await emailError.getText()).toEqual("Enter valid email");
});


When('User closes the dialog', async () => {
    await $("//button[text()='Cancel']").click();
});


When('User navigates to Patients section', async () => {
    const patients = await $("div.patients");
    await patients.waitForClickable();
    await patients.click();
});

Then('The patient grid should have more than 7 rows', async () => {
    const grid = await $(".e-table");
    await grid.waitForExist({timeout:15000});
    const patientList = await $$(".e-table tbody tr");
    console.log("Number of rows:", patientList.length);
    expect(patientList.length).toBeGreaterThan(7);
});
