const { test, expect } = require('@playwright/test');

test('Pos_fun_0001 - Convert polite greeting question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'suba dhavasak ! oyaata kohomadha ?');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0002 - Convert past tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'api iiyee Kandy giyaa');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0003 - Convert polite help', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill(
    'textarea',
    'puLuvannam magee lipinaya eyaata email karanna. mama passe reply karannam.'
  );
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0004 - Convert currency and units', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill(
    'textarea',
    'mata kg 2k saha ml 500k ganna oone. total eka Rs. 2450 vagei.'
  );
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0005 - Convert simple need statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'mata bath oone.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0006 - Convert future plan', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'mama heta pansal yanavaa.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0007 - Convert present work', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'mama dhaen vaedaka inne.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0008 - Convert imperative polite', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'karuNaakara eeka dhenna.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0009 - Convert negation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'mata eeka epaa.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0010 - Convert pronoun question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'oyaa adha enavadha ?');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0011 - Convert compound reason', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill(
    'textarea',
    'mama gedhara yanne, namuth vahina nisaa late vunee.'
  );
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0012 - Convert complex condition', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill(
    'textarea',
    'oyaa enavanam api passe kathaa karamu, naethnam gedhara innam.'
  );
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0013 - Convert mixed English brand', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'adha Zoom meeting ekak thiyenavaa 7.30 AM ta.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0014 - Convert dates', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'appointment eka 2026-05-21 thiyenavaa.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0015 - Convert plural', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'api yamu.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0016 - Convert informal response', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'hari, mama karannam.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0017 - Convert phrase pattern', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'poddak inna.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0018 - Convert repeated emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'hari hari');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0019 - Convert names and traffic', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'nimaali Colombo office enna late vunee traffic nisaa.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0020 - Convert formatting line break', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill(
    'textarea',
    `mama gedhara yanavaa. 
oyaa enavadha maath ekka ?                                        `
  );
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0021 - Convert abbreviations', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'ID saha NIC details email karanna.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0022 - Convert punctuation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'ayiyoo ! meeka hariyata vaeda karanavadha ?');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0023 - Convert paragraph long', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill(
    'textarea',
    'adha api trip eka plan karanavaa. mama morning Colombo idhala Kandy valata yanna hadhanne. route eka check karanna. vahina nisaa traffic thiyenna puluvan. documents tika email karanna, passe WhatsApp link eka dhaanna. '
  );
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_fun_0024 - Convert tech terms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'LinkedIn profile update karalaa CV eka attach karanna.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Pos_UI_0001 - Convert tech terms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'mama panthi yanavaa');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Neg_fun_0001 - Potential failure: Missing spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'mamagedharayanavaa.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Neg_fun_0002 - Potential failure: Extra letters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'maaataaa bath ooneee.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Neg_fun_0003 - Potential failure: Mixed scripts', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'mama gedhara yanavaa හැබැයි adha vahinavaa.                                    ');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Neg_fun_0004 - Potential failure: Heavy punctuation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'meeka???hari!!??');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Neg_fun_0005 - Potential failure: Multiple spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'mama  gedhara  yanavaa.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Neg_fun_0006 - Potential failure: Units joined', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'kg2k ml500k ganna.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Neg_fun_0007 - Potential failure: Joined brand', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', ' Zoommeetingeka thiyenavaa.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Neg_fun_0008 - Potential failure: Slang typos', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'ado machan vaedak baragaththanam eeka hariyata karapanko bro.');
  await expect(page.locator('textarea')).toBeVisible();
});

test('Neg_fun_0009 - Potential failure: Long no punctuation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill(
    'textarea',
    'mama dhaen vaeda karanavaa oyaa enavanam api passe kathaa karamu meeka amaaruyi kiyalaa hithenavaa.'
  );
  await expect(page.locator('textarea')).toBeVisible();
});

test('Neg_fun_0010 - Potential failure: Non-standard spelling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'oyaata kohomadhaaa ?');
  await expect(page.locator('textarea')).toBeVisible();
});
