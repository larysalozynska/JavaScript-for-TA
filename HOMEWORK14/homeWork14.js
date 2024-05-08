const {By, Builder, until} = require('selenium-webdriver');
const assert = require("assert").assert;

  describe('First script', function () {
    let driver;
    
    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });
    
    it('Test Case: Стан активності елемента', async function () {
      await driver.get('https://the-internet.herokuapp.com/dropdown');
      
      const dropdown = await driver.findElement(By.id('dropdown'));
      await dropdown.click();

      const firstOption = await dropdown.findElement(By.css("option:nth-child(1)"))
      const firstOptionEnabled = await firstOption.isEnabled()

      if (!firstOptionEnabled) {
        console.log("Перший елемент списку неактивний");
      }else{
        console.log("Перший елемент списку активний");
      }

      const secondOption = await dropdown.findElement(By.css("option:nth-child(2)"));
      const secondOptionIsEnabled = await secondOption.isEnabled();
      if (secondOptionIsEnabled) {
        console.log("Другий елемент списку активний");
      } else {
        console.log("Другий елемент списку неактивний");
      }
    });
  

    it('Test Case: Наведення мишою на елемент', async function (){
        await driver.get('https://the-internet.herokuapp.com/hovers');
        const userAvatar = await driver.findElement(By.css('.figure'));

        const actions = driver.actions({ bridge: true });
        await actions.move({ duration: 1000, origin: userAvatar }).perform();

        const user1Element = await driver.findElement(By.xpath('//h5[text()="name: user1"]'));

        if ( await user1Element.isDisplayed()) {
            console.log('name: user1 is displayed')
        }else (
            console.log('name: user1 is NOT displayed')
        )

    })


    it('Test Case: Заповнення форми', async function (){
        await driver.get('https://formy-project.herokuapp.com/form');

        await driver.findElement(By.id('first-name')).sendKeys('Peter');
        await driver.findElement(By.id('last-name')).sendKeys('Peterson');
        await driver.findElement(By.id('job-title')).sendKeys('tester');

        await driver.findElement(By.id('radio-button-1')).click();
        await driver.findElement(By.id('checkbox-1')).click();

        await driver.findElement(By.xpath('//option[text()="2-4"]')).click();

        await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');

        await driver.findElement(By.css('.btn-primary')).click()
 
        await driver.wait(until.elementsLocated(By.className('alert-success')), 10000);

        const submitedForm = await driver.findElement(By.className('alert-success'))  
        if ( await submitedForm.isDisplayed()) {
            console.log('The form was successfully submitted!')
        }

    })


    it('Test Case: Сортування таблиці', async function (){
        await driver.get('https://the-internet.herokuapp.com/tables');

        await driver.findElement(By.xpath('//table[@id="table2"]/thead/tr/th/span[@class="dues"]')).click()

        await driver.sleep(2000)

        const dueCells = await driver.findElements(By.xpath("//table[2]//td[4]"));

        const cellValues = await Promise.all(dueCells.map(async (cell) => {
            const cellValue = await cell.getText()
            return Number(cellValue.replace('$', ''))
        }));


        const sortedValues = [...cellValues].sort((a, b) => a - b)

        if(cellValues.toString() === sortedValues.toString()){
            console.log("Test Passed: Values in 'Due' column are sorted in ascending order.");
        } else {
            console.log("Test Failed: Values in 'Due' column are not sorted in ascending order.");
        }

    })

     after(async () => await driver.quit());
  });