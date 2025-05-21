describe('Metro5 App - Login', () => {
  it('should allow the user to login with valid credentials', async () => {
    const phoneInput = await $('~Phone Number');
    await phoneInput.setValue('8369270284');

    const passwordInput = await $('~Password');
    await passwordInput.setValue('4ndabhiig');

    const continueButton = await $('~Continue');
    await continueButton.click();
  });

  it('enter and verify otp', async () => {
    const skipperButton = await $('~skipper');
    await skipperButton.click();
  });

  it('Dropdown menu and Radio button performance', async () => {
  
    const startingStationDropdown = await $(`//*[contains(@text, 'Starting Station')]`);
    await startingStationDropdown.click();
    const startingStationText = await startingStationDropdown.getText();
    console.log('Text (Starting Station):', startingStationText);

    
    const versovaOption = await $(`//*[contains(@text, 'Navigate')]`);
    await versovaOption.click();
    const versovaText = await versovaOption.getText();
    console.log('Text (Versova):', versovaText);

    const phoneInput = await $('~yes_butt');
    await phoneInput.click();

  });
});