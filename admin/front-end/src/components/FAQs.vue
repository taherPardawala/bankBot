<template>
    <div class="faq">
        <v-layout row justify-center>
            <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
                <v-card>
                    <v-toolbar dark color="cyan lighten-4">
                        <v-btn icon @click.native="closeDialog" dark>
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{data.faqName}}</v-toolbar-title>
                    </v-toolbar>
                    <div v-for="(i,key) in data.faqs" :key=key style="padding:1%">
                        <h2>{{i.question}}</h2>
                        <p style="text-align:justify;font-size:18px;">{{i.ans}}</p>
                        <v-divider></v-divider>
                    </div>
                </v-card>
            </v-dialog>
        </v-layout>
        <div class="buttons">
            <v-btn color="blue lighten-1" class="shape" dark @click.native.stop="dialog = openDialog('personalLoan')">Personal Loan</v-btn><br>
            <v-btn color="blue darken-1" class="shape" dark @click.native.stop="dialog = openDialog('creditCard')">Credit Card</v-btn><br>
            <v-btn color="blue darken-2" class="shape" dark @click.native.stop="dialog = openDialog('homeLoan')">Home Loan</v-btn><br>
            <v-btn color="blue darken-3" class="shape" dark @click.native.stop="dialog = openDialog('savingsAccount')">Savings Account</v-btn><br>
            <v-btn color="blue darken-4" class="shape" dark @click.native.stop="dialog = openDialog('carLoan')">Car Loan</v-btn>
            <v-btn color="blue accent-3" class="routeBtns" dark @click="updatePath('/')">Back Home</v-btn>
            <v-btn color="blue accent-3" class="routeBtns" dark @click="updatePath('/login')">Login</v-btn>
        </div>
    </div>
</template>

<script>
    import router from '../router'
    export default {
        data() {
            return {
                dialog: false,
                personalLoan: {
                    faqName: 'Personal Loan',
                    faqs: [{
                            question: 'Q1. What can I use a personal loan for',
                            ans: 'A personal loan can be used for almost any type of expense ranging from big ticket appliance purchases and home renovations to luxury vacations and debt consolidation. Some other cases where personal loans may be useful include payment to unexpected medical bills, investment in business, fixing your car, down payment of new house and much more. '
                        },
                        {
                            question: 'Q2. Am I eligible for personal loan',
                            ans: 'You must have a regular source of income to avail a personal loan whether you are a salaried individual, self-employed business person or a professional. A person\'s eligibility is also affected by the company he/she is employed with, his/her credit history his/her residential location and other factors as per the lender’s criteria. '
                        },
                        {
                            question: 'Q3. Is there a minimum personal loan amount that I need to borrow',
                            ans: 'Yes. Though the exact amount of the minimum personal loan amount varies from one lending institution to another, most lenders have set their minimum personal loan principal amount at Rs. 30,000.'
                        },
                        {
                            question: 'Q4. How is the maximum loan amount decided',
                            ans: 'When calculating the maximum personal loan amount in case of salaried people, the bank/financial institution takes care that the EMI does not exceed 30% to40% of the applicant’s take home salary.  Any existing loans that are being serviced by the applicant are also considered when calculating the personal loan amount. And, for the self employed, the loan value is determined on the basis of the profit earned as per the most recent acknowledged Profit/Loss statement, while taking into account any additional liabilities (such as current loans for business etc.) that the applicant might have.'
                        },
                        {
                            question: 'Q5. What is the tenure of a personal loan',
                            ans: 'Personal loans feature tenure of 1 year to 5 years or 12 to 60 months. In rare cases, shorter or longer personal loan tenures may be allowed by the borrower on a case by case basis.'
                        },
                        {
                            question: 'Q6. Can I apply for a personal loan jointly with my spouse',
                            ans: 'Yes, personal loan can be applied either by yourself (singly) or together with a co-applicant (jointly).The co-applicant needs to be a family member like your spouse or parents.  By getting a co-borrower, your loan application will be processed in a higher income bracket, enabling you to avail a larger loan amount. However, keep in mind that if either you or your co-applicant have poor credit history, the chances of success of your loan application may be adversely affected.'
                        },
                        {
                            question: 'Q7. What are the key documents required when applying for a personal loan',
                            ans: ' Though the documentation requirements of personal loans vary from one financial institution to another, some of the key documents that you would need to provide with your personal loan application include:Income proof (Salary Slip for salaried/recent acknowledged ITR for self-employed)Address Proof DocumentsIdentity Proof Documents and othersCertified copies of degree/license (in case of self-employed professional) and others as per the lender’s criteria.'
                        },
                        {
                            question: 'Q8. What are the key steps in the loan approval process',
                            ans: 'Approval of loan is at the sole discretion of the loan sanctioning officer who bases his/her decision on the basis of the criteria specified by the bank/ financial institution. The entire process can take from about 48 hours to about two week\'s time. Once all the necessary documents are submitted and the verification process is completed, the loan, if sanctioned, is disbursed within seven working days by the bank. In order to avoid delays in loan processing and disbursement, do keep all necessary documents ready along with the post dated checks (PDC) and/or signed Electronic Clearing System form. '
                        },
                        {
                            question: 'Q9. How to decide which bank/financial institution to take the loan from',
                            ans: 'It is always a good idea to compare the offers of individual banks before you decide to settle on a specific provider. Use online tools like the loan eligibility calculator and personal loan EMI calculator to find the loan option that suits you the best. Some of the key factors to consider when deciding on a loan provider include interest rates, loan tenure, processing fees and others.'
                        },
                        {
                            question: 'Q10. How do banks decide the maximum personal loan amount that I can get',
                            ans: 'Though loan sanctioning criteria may differ from one bank to another, some of the key factors that determine the maximum loan amount that may be sanctioned to you include – credit score, your current income level and your current liabilities. A high credit score (closer to 900) shows that you have serviced your previous loans and/or credit card dues in a proper manner, which would lead lenders to feel that you are a safe borrower leading to the sanction of a higher loan amount. Your current income level and your liabilities (outstanding credit card dues, unpaid loans, current EMI’s etc.) have a direct bearing on your repayment capacity. Therefore, if you are in a lower income bracket or have a large amount of unpaid credit card bills or outstanding loan EMI, you would be sanctioned for a lower personal loan amount compared to an individual with a higher income or fewer financial liabilities.'
                        },
                        {
                            question: 'Q11. Should I always choose the lowest possible EMI when choosing my loan provider',
                            ans: ' Low EMI offers can typically result from a low interest rate, a long repayment term or a combination of the two factors. Thus in some cases, you might end up paying a lot more to your lender as interest if you choose the lower EMI option. Instead use online tools like the personal loan EMI calculator to figure out your interest payout over the loan tenure and your repayment capacity before making your decision.'
                        },
                        {
                            question: 'Q12. What are the prevailing rates for personal loans',
                            ans: '  Being unsecured loans, personal loans feature a higher rate of interest as compared to secured loans such as home loans and car loans. At present, many leading banks and NBFCs in India are offering personal loans at interest rates as low as 11.49%. However, the rate of interest applicable to a specific applicant would be contingent on key factors including credit score, income level, loan amount and tenure, previous relationship (savings account, loans or credit cards) with the lender as well as other factors.'
                        },
                        {
                            question: 'Q13. How do I compare the interest rates of personal loans',
                            ans: ' Log on to Paisabazaar.com and fill out our personal loan eligibility tool to get a list of all available personal loan option along with key data such as applicable interest rate, processing fees as well as information about other charges such as pre-payment charges. Using these data, you can easily compare the various personal loan options available with multiple banks and NBFCs. '
                        },
                        {
                            question: 'Q14. How do I get the lowest interest rates on personal loan',
                            ans: ' Earlier, you might have had to go to multiple lenders in order to get the information regarding interest rates, tenures, processing fees etc. Not anymore. Just log on to Paisabazaar.com and fill out the simple form in our Personal Loan sections and in seconds you get information regarding numerous prospective lenders along with the applicable interest rates and various charges including processing fees. You can easily choose the lowest interest rate from the available list and apply for a personal loan within minutes from the convenience of your home or workplace.'
                        },
                        {
                            question: 'Q15. Is there any extra charge payable when applying for personal loan',
                            ans: 'Yes. In addition to the interest payable on the principal amount, there is an additional non-refundable charge that needs to be paid when applying for a personal loan.  Processing fees, which are usually 1%-2% of the loan principal, are charged by the lender to take care of any paperwork that needs to be processed as part of the personal loan application process. This charge may be waived by your lender in case you have a long term association with the lender.'
                        },
                        {
                            question: '  Q16. Are personal loan interest rates fixed or floating',
                            ans: 'In case of a fixed rate personal loan, your EMI amount remains fixed therefore every month during the loan tenure, you will pay the exact same amount as EMI. In case of a floating rate personal loan, the EMI amount will keep decreasing as it follows the reducing balance method of calculating interest payout on a personal loan. In case of a floating rate, the applicable interest rate may be varied by the bank periodically as per the new MCLR rules, floating interest rates may be changed either on a half yearly or yearly basis.'
                        },
                        {
                            question: 'Q17. What is the difference between reducing and flat interest rate',
                            ans: 'As the name implies, Reducing Balance Interest Rate involves the borrower to pay interest only on the outstanding loan balance, i.e. the balance that remains outstanding after getting reduced by the principal repayment. Flat Interest Rate is wherein the borrower needs to pay interest on the entire loan balance throughout the loan term. Thus, the interest payable does not decrease even as the borrower makes the periodic payments (EMIs).'
                        },
                        {
                            question: 'Q18. What is relationship discount',
                            ans: 'Relationship discount is an additional benefit that is provided by the banks or lenders to a prospective applicant if they have a pre-existing relationship with the lender. Such pre-existing relationship may include having a salary/savings account with the bank or having an existing credit card, fixed deposit or loan with the prospective lender.  Relationship discounts may result in the lender providing you with discounts when applying for the loan like – waiver of the processing fees, lower interest rates or others.'
                        },
                        {
                            question: 'Q19. How is the personal loan disbursed',
                            ans: 'Once you get approved for a personal loan, you may either receive an account payee cheque/draft equal to the loan amount or get the money deposited automatically into your savings account electronically.'
                        },
                        {
                            question: 'Q20. How long does it take for personal loan to be disbursed',
                            ans: 'You can choose and apply for a personal loan within minutes through Paisabazaar.com. After you have filled out the online application form on our website, the prospective lender gets in touch with you and asks you to provide the relevant documents to support you loan application. Once you have submitted all the relevant documents, the bank may disburse your personal loan as early as the next 48 hours. The usually time frame to complete the loan disbursal process is 3 to 4 working days.'
                        },
                        {
                            question: 'Q21. Which are the best banks and NBFCs for a personal loan',
                            ans: 'Personal loans are offered by all leading banks and numerous NBFCs (non-banking financial companies). Some of the leading providers of personal loans include HDFC Bank, IndusInd Bank, Citibank, Axis Bank, Fullerton India, Capital First, State Bank of India and Associates, Indian Bank, Karnataka Bank, Standard Chartered Bank and many others.'
                        },
                        {
                            question: 'Q22. Is there any Balance Transfer offer on a personal loan',
                            ans: ' Are there any benefits of this balance transfer'
                        },
                        {
                            question: 'Q23. Why do my initial EMIs have little impact on the principal amount due',
                            ans: 'A major portion of your initial EMIs are actually used to pay off the interest dues on your home loan. This process is termed as “front loading”, hence only a small portion of the principal is paid off initially. As you progress further with your EMI, these small decreases in the principal amount add up leading to a decrease in the interest charged on the outstanding amount, thus a larger portion of the EMI is used for paying off the loan principal in later years.'
                        },
                        {
                            question: 'Q24. What if I default on my scheduled Personal Loan EMIs',
                            ans: 'In case you miss your scheduled personal loan EMIs and are unable to make future payments on your personal loan, the lender initially make attempts to recover the due amount through settlements and recovery agents. If such attempts fail and your loan account is marked as a default, this personal loan will show up on your credit report as a default, which will adversely affect your credit score and make it difficult for you to get approval for loans and credit cards in the future.'
                        },
                        {
                            question: 'Q25. Are there any tax benefits associated with personal loan',
                            ans: ' Personal loans usually have no tax benefits, however, in case you take a personal loan for home renovations/down payment, you may be eligible for income tax deduction under section 24. However, this tax benefit is limited to only the interest on the loan and not the principal amount. Also you would have to furnish proper receipts to claim deduction.'
                        },
                        {
                            question: 'Q26. How to repay the personal loan',
                            ans: 'The loan can be repaid in the form of Equated Monthly Installment (EMI) via post-dated cheques   drawn in favour of the bank or by releasing a mandate allowing payment through the Electronic Clearing Services (ECS) system.'
                        },
                        {
                            question: 'Q27. What are pre-payment/foreclosure charges and how much are they',
                            ans: ' In case you decide to pay off your personal loan before the loan tenure is completed, you get charged an additional fee termed as pre-payment/foreclosure charge/penalty. This pre-payment penalty usually ranges between 1% and 2% of the principal outstanding; however, some banks charge a higher amount to foreclose a personal loan.'
                        },
                        {
                            question: 'Q28. What is the difference between Part payment, Pre-payment and Pre-closure.  Are there any charges related to this',
                            ans: 'Pre-closure: Pre-closure refers to completely paying off a personal loan before the loan tenure has ended. Just like pre-payment charge, pre-closure charges range from 2% to 5% of the loan amount.'
                        },
                        {
                            question: 'Q29. What is credit report and score',
                            ans: 'A personal loan is an unsecured loan hence your credit history usually plays a significant role in the loan approval process. There are three credit reporting agencies that operate in India – Equifax, Experian and CIBIL TransUnion. These have tie-ups with various lenders and provide their credit rating services to help lenders evaluate prospective borrowers. Experian India currently has collaboration with Union Bank of India, Sundaram Finance, Punjab National Bank, Magna Finance, Indian Bank, Axis Bank and Federal Bank to provide credit information services. Similarly, Equifax India currently has tie-ups with leading lenders such as State Bank of India, Union Bank of India, Religare Finvest Limited, Kotak Mahindra Prime Limited and Bank of Baroda to provide their credit information services. Apart from banks and NBFCs, individuals can also check their credit score and get a copy of their free credit report online through Paisabazaar.com. Credit Bureau (India) Limited (CIBIL) is third player in the credit reporting marketplace. It is India’s first credit information company that in collaboration with TransUnion, a globally recognised credit reporting agency. The credit reporting agencies – Equifax, Experian and CIBIL TransUnion maintain detailed records of your credit history including repayment track record of all your credit card bills and any current or previous loans. Before approving your loan, the prospective lender cross checks your repayment track record.'
                        },
                        {
                            question: 'Q30. How is having higher credit score beneficial',
                            ans: 'A higher credit score indicates that you have a good track record with respect to loans that you have borrowed in the past. Therefore if you credit score is high (more than 750 in case of CIBIL TransUnion), your chances of being granted a loan are much higher than if you have a lower score. Additionally, you may be able to negotiate benefits such as a lower interest rate, higher loan amount, waiver of processing charges, etc. by leveraging your high credit score. '
                        },
                        {
                            question: 'Q31. What do the terms settlement, default and closed mean',
                            ans: ' Does it affect my credit score'
                        },
                        {
                            question: 'Q32. How is personal loan different from loan against credit card',
                            ans: 'Loan on credit card is an offer that you may be able to avail on your credit card. In many ways a loan offered on a credit card is similar, especially in terms of the interest rate and the loan tenure. However, a loan on credit card is only applicable to specific credit cards and you cannot approach any company other than your credit card issuer for a loan on credit card. In case of a personal loan, you can approach any lender for the loan. Moreover, credit card loans do not require any additional documentation unlike a personal loan application.'
                        }
                    ],
                },
                creditCard: {
                    faqName: 'Credit Card',
                    faqs: [{
                            question: 'Q1. What is a Credit Card',
                            ans: 'Credit card is a convenient alternative to cash or check-based transactions issued by banks and financial institutions, enabling the holder to make a purchase (or draw advance cash) on credit. The due amount at the end of the billing cycle may be paid as a lump sum within the due date in smaller installments before the final due date. The purchases that are made using a credit card are in fact short term unsecured micro loans and if paid off within a specified time (interest free period) do not have any interest payouts. Additionally, credit cards allow you to benefit from the option of revolving credit i.e. you might pay off your credit card dues in one go or make multiple small payments to pay off your debt. Also known as plastic money, credit cards have only recently been introduced in India as compared to the western world. According to RBI data, as of December 2015, there were 2.27 crore credit cards in circulation within India. Even better, you can use credit cards not just within India but also worldwide.Credit cards are in fact tools that allow you to pay for goods and services using the bank’s money instead of your own. But this is only for a short period of time because if you fail to pay back the money before the end of your interest-free period, you will be charged interest on the amount owe to the bank.'
                        },
                        {
                            question: 'Q2. How does a credit card differ from debit card',
                            ans: 'The money that you draw out via debit card is your own money which is debited from the bank account linked to your card. On the other hand, the money that you spend (purchases) or withdraw (cash advance) via a credit card is more like a short term loan granted by card issuing entity. Instead of paying off this short term loan on a per use basis, all your expenses get converted into a consolidated bill at the end of the billing cycle. '
                        },
                        {
                            question: 'Q3. What is the difference between VISA card and MasterCard',
                            ans: 'Visa and MasterCard are global payment technology companies based out of the US that connects consumers, businesses, banks and governments across more than 200 countries and territories, enabling them to use digital currency instead of cash, checks, drafts, etc.  Apart from VISA and MasterCard, other leading global payment technology companies are American Express, Diners Club and Discover.'
                        },
                        {
                            question: 'Q4. What are the different types of credit cards',
                            ans: 'Credit cards can be broadly classified into two categories: Standard credit cards – These are plain credit cards with basic features with no or nominal annual fees. Specialized credit cards – These are credit cards that are designed to cater to specific needs of the cardholder. Such cards include credit cards that provide dining benefits, fuel cost savings, travel privileges and others. Alternately, credit cards can also be classified as follows: General Cards – These credit cards come with basic features and relatively low annual fees. These are ideal for day-to-day usage. Reward Points Cards – These are credit cards that offer reward points to the card holder for every purchase. The more you spend, the more reward points you earn. These points can be redeemed in lieu of freebies, gift vouchers and coupons. Cash-back Cards: When you use this type of credit card for purchases, a specific percentage of your expenditures are credited back to your account. These cash back rewards may be credited back to your card account after every purchase or cumulative cash back rewards adjusted against your card account periodically.'
                        },
                        {
                            question: 'Q5. What is Co-Branded Credit Card',
                            ans: 'Any credit card that features a merchant’s logo/name as a co-promoter of the specific credit card along with the card issuer is termed as a co-branded credit card. Leading merchants in India who sponsor co-branded credit cards include airlines, online shopping websites and others.'
                        },
                        {
                            question: 'Q6. How does the new EMV chip and PIN system for credit cards work',
                            ans: 'EMV – which is short for Europay, MasterCard and Visa — is a global standard for cards equipped with the chip and PIN technology. The chip card and PIN code need to be used together to authenticate chip-card transactions. Unlike magnetic-stripe cards, every time an EMV card is used for payment, the card chip creates a unique transaction code that cannot be used for another transaction. EMV technology provides an additional level of security in point of sales (POS) transactions to prevent credit card frauds.'
                        },
                        {
                            question: 'Q7. What is the CVV number',
                            ans: 'The CVV Number (Card Verification Value) it is a 3 digit number mentioned on back side of your credit card on the right side of the signature panel. Also known as the CVV2, this 3 digit number is an essential part of the verification process especially in case of online transactions. The CVV number should not be disclosed to anyone.'
                        },
                        {
                            question: 'Q8. Am I eligible for a Credit Card',
                            ans: 'Though the eligibility criteria for credit cards vary from one issuer to another, the following are a few generic criteria: No less than 18 years old at the time Either salaried or self employed (Salary proof/ acknowledge ITR required) Have at least one savings account in an Indian Bank Have a valid Indian address Qualify the minimum income requirement set by the card issuer etc.'
                        },
                        {
                            question: 'Q9. How long does it take to apply for and receive a Credit Card',
                            ans: 'You can apply for a credit card online in less than 2 minutes through Paisabazaar.com. After you have completed and submitted the online application, the prospective card issuer will get in touch with you and ask you to submit the supporting documents. Once the bank has received your application form, complete in all respects along with all the required documents, your application will be processed within two weeks. Provided all your documents are in order, you will receive your new credit card within 7 working days, once your application is approved and all the checks have been completed by the bank. The bank will send you timely alerts on the credit card application status via SMS on the mobile number stated on your application form as well as through emails sent to the registered email address.'
                        },
                        {
                            question: 'Q10. What is the difference between a Credit Card and a Charge Card',
                            ans: 'Credit Card Charge Card 1. Credit cards feature a specific limit known as the Credit Limit. 2. In Credit card customer has an option to make part payment of total outstanding. 3. Credit card is provided by either VISA or MasterCard 1. Charge Cards have no credit limits. 2. In case of a charge card, customer has to pay total outstanding balance at the end of every month. The balance cannot be carried forward.. 3. Charge cards are provided by either with Diners Club or American Express.'
                        },
                        {
                            question: 'Q11. What is a supplementary/add-on card',
                            ans: 'A supplementary/add-on card refers to one or more credit cards that may be issued to family members of the primary card holder. Add on cards share the total credit limit of the primary card account and have the same features as the primary card. Any reward points earned through the add-on card(s) are credited to the primary card account.'
                        },
                        {
                            question: 'Q12. How many supplementary cards can I have and what are the charges involved',
                            ans: 'Though this tends to vary from one credit card issuer to another, in most cases, you can apply for up to 3 supplementary cards for family members like your spouse, children, parents and siblings.'
                        },
                        {
                            question: 'Q13. What should I do if I lose my card or if my card is stolen',
                            ans: 'In case you have lost your card or it has been stolen, the priority is to block the card and prevent unauthorised transactions.  Please call the card issuer’s customer care number and inform them of the card loss/theft so that the card is blocked and the replacement card issue procedure is started.'
                        },
                        {
                            question: 'Q14. What are reward points and how can I use them',
                            ans: 'Whenever you make a purchase using your credit card, you can earn reward points. The rate of reward point accumulation varies from one expense category to another as well as from one bank to another. The accumulated reward points can be exchanged in lieu of a range of freebies and discount vouchers.'
                        },
                        {
                            question: 'Q15. What type of dining benefits can my credit card provide',
                            ans: 'In case of many credit cards, you may be eligible to receive a range of dining benefits ranging from cash-back offers, discounts on dining bills, accelerated reward points accumulation at partner restaurants and much more. Though such benefits were earlier reserved for premium credit cards, many standard cards currently provide these benefits.'
                        },
                        {
                            question: 'Q16. What type of travel privileges can my credit card provide',
                            ans: 'Some credit cards feature a range of travel benefits as a complimentary feature of the card. Such benefits may include discount on flight/bus tickets and/or hotels booked through a specific website, airline or hotel chain. In case of some premium credit cards designed for frequent flyers, you may be eligible for complimentary travel insurance including payout options for missed flights, trip cancellations, medical emergency costs during your travel, air accident death insurance etc. Additionally, in case of most travel cards, you get the option of converting reward points accrued for all your other purchases into frequent flyer miles.'
                        },
                        {
                            question: 'Q17. How does a credit card generate fuel cost savings',
                            ans: 'Fuel cards provide you with the option of generating savings in terms of surcharge waiver when you fill your vehicle up at the petrol pump. Apart from the fuel surcharge waiver, some credit cards may also provide you with cash back benefits whenever you use your car for transactions at a petrol pump.     '
                        },
                        {
                            question: 'Q18. What are the key charges applicable to credit cards',
                            ans: ' Joining fee – paid at the time of purchasing a credit cardAnnual fee– pre- specified amount paid annually by people having credit card Duplicate statement fee- a fixed sum charged on getting a duplicate statement in physical form Late payment charge – it is a penalty to be paid over and above the interest charges, if the payments are not made in a timely fashion. Cash withdrawal- an interest is charged on withdrawal of cash against the credit card Service Tax- service tax is charged on the expenses made using a credit card which depends on the total value of the transaction inclusive of interest, fees and other charges ECS or cheque return charge- a fixed amount is to be paid by the card in case of ECS transfer failure or cheque bounce Foreign currency transactions- for the transactions made overseas, a pre-defined percentage of transaction value subjected to a minimum amount is to be paid to the credit card issuer. Over-limit fee- It is the fee charged when your purchases, finance charges or fees exceed your credit limit.'
                        },
                        {
                            question: 'Q19. What is an Annual Fee',
                            ans: 'An annual (yearly) fee in charged by a credit card company each year for use of a credit card. This fee varies from one card to another and may be waived off by the bank in case your card agreement contains a waiver clause on achieving a specific annual expense threshold.  There are also a number of credit cards available that have zero annual fees.'
                        },
                        {
                            question: 'Q20. How does the card issuer decide my credit limit',
                            ans: 'The prospective card issuer, at its sole discretion, will determine the Card members’ limit and cash withdrawal limit. These limits are communicated to the customer at the time of card delivery and printed in the credit card agreement letter as well as in the Monthly statement. Some key factors that may influence the decision of the card issuer include customer profile, the repayment capacity and CIBIL credit report along with other internal underwriting norms.'
                        },
                        {
                            question: 'Q21. What happens if my card expenditure exceeds my assigned credit limit',
                            ans: 'If your credit card purchases/cash advances exceeds your assigned credit limit (inclusive of retail purchases, cash advances, fess, and other charges), an over limit fee plus applicable taxes will be charged to your credit card account.'
                        },
                        {
                            question: 'Q22. Can I increase my credit limit later on',
                            ans: 'Yes, it is possible. In this case card member seeking to have their credit limit increased can do place a request with the card issuer. Additional documents such as those declaring income may need to be submitted with the card issuer to complete process. The Bank at its sole discretion and based on such documents provided, may increase choose to increase the credit limit. Previous repayment history of loans and credit card dues of the card holder would also play a major role in the card holder’s decision.'
                        },
                        {
                            question: 'Q23. How do I find the credit card due amount',
                            ans: 'The amount due for payment is reflected in your Credit Card Statement as Total Payment Due. By paying this amount, on or before the due date, you can take advantage of the interest free period on your credit card.  The due amount in your bill will include all unpaid balances from the previous statement, interest charges (if any), the billed expenses for the current period, annual fees (only once a year), joining fee (only at the time of taking a new card) and a range of other applicable charges and taxes. '
                        },
                        {
                            question: 'Q24. What is a Finance Charge and how is it computed',
                            ans: 'A Finance Charge is the interest billed to the account if the cardholder pays an amount less than the statement balance on the corresponding due date. The finance charge is applied only to the unpaid amount remaining after the partial payment has been made and not on the original outstanding amount. The Finance Charge is calculated on an average daily basis and will continue to be added to the outstanding balance of the card account until full payment is made.'
                        },
                        {
                            question: 'Q25. What do the terms billing date/cycle mean and are they subject to change',
                            ans: 'Billing date/Cycle means the date on which your new monthly bill will be generated by the bank. No, billing dates are generally not subject to change. However, card members may place a request to change the billing cycle but the change request may be accepted or denied at the sole discretion of the bank.'
                        },
                        {
                            question: 'Q26. What is Minimum Payment Due',
                            ans: 'The minimum amount you need to pay on or before the due date is generally computed as 5% of the total amount due as per your most recent credit card statement. By paying this minimum due amount, you are not charged any late fees by the card issuer. However, making just the minimum payments on your due amount is one of the rookie mistakes.'
                        },
                        {
                            question: 'Q27. What happens if I make minimum due payments for my card',
                            ans: 'If you make a bill payment equal to the minimum due amount only, finance charges will be applied to the amount remaining after deducting the minimum payment from the total amount due. Minimum payment amounts prioritize the interest payouts on the outstanding balance, hence the repayment of the credit card due is extended over a long period of time.'
                        },
                        {
                            question: 'Q28. How can I pay my credit card bills',
                            ans: 'There are various mode of payments are available for you, when planning to pay off your credit card bill. The following are your options: NetBanking: In order to pay your credit card bills using Netbanking. Card Member first need to register the said credit card with a NetBanking-enabled account. Cheque/Draft: You can also pay your bill by cheque/Draft. Simply drop your cheque/draft in a drop box place in respective Banks’ Branch and ATM with required details. NEFT/RTGS: If you do not have a bank account with the card issuer, you can make payments towards your credit card through NEFT/RTGS fund transfer mode using IFSC code provided by your card issuer. Cash: You can also pay by cash at any branch of card issuing bank. However, cash payments usually have an additional charge attached to them.'
                        },
                        {
                            question: 'Q29. What is foreign currency transaction markup',
                            ans: ' When you use your card abroad, your card provider charges you a transaction fee of up to 3.5% of the transaction amount every time you make purchases or withdraw cash. The exact markup value varies from one card issuer to another as well as from one card to another.'
                        },
                        {
                            question: 'Q30. What is credit card balance transfer',
                            ans: 'A balance transfer is when you transfer the balance of one credit card account to another credit card account. When the credit card balance transfer process is completed, the card holder no longer owes money to the original card issuer and instead owes the debt to the issuer of the second card.'
                        },
                        {
                            question: 'Q31. Is there a limit on the total balance I can transfer via credit card balance transfer',
                            ans: 'Yes. The amount for which you can transfer make a balance depends on various factors including but not limited to the credit limit of the card you are transferring the balance to and the terms and conditions specified in the balance transfer offer.'
                        },
                        {
                            question: 'Q32. How does the “cash-on-EMI” facility work',
                            ans: 'Different banks have different terminologies; however, “Cash on EMI”, “INSTA Loan”, “Cash On Call”, “Loan On Phone” all are same. It is a pre-approved loan within a specified credit limit based on your Credit Card. This facility is provided at the sole discretion of the card issuer is communicated directly whenever a card member is eligible for this.'
                        },
                        {
                            question: 'Q33. What is EMI conversion of credit card debt',
                            ans: 'The Bank at its sole discretion will decide the interest and tenure of same. This offer is not provided by all banks, but some banks allow you to convert big-ticket purchases valued over a certain limit into credit card EMI payments by logging into your credit card account online. For details regarding this, card member has to contact respective Bank’s customer Care.'
                        },
                        {
                            question: 'Q34. What happens if I want to prepay my EMIs',
                            ans: 'It’s good to reduce your debt burden as soon as possible; however, the bank at its sole discretion may impose prepayment charges. For this, card member has to contact the card issuer’s customer care department.'
                        },
                        {
                            question: 'Q35. What does “zero lost card liability” mean',
                            ans: 'It means card member not liable for any fraudulent transaction made post intimation of lost/stolen card to the issuer. Any transactions that get completed or charged to the card holder’s account once the issue is made known to the card issuer will be written off by the issuer. This is only one of the many credit card protection plans that you can avail.'
                        },
                        {
                            question: 'Q36. How can I avail a loan on my credit card',
                            ans: 'Availing a Loan on the basis of Credit card is at sole discretion of the bank. Generally banks always communicate the same to card member periodically as an available offer on the card. Additionally, the card member can also place a request for same to the card issuing bank, however, the approval of the loan is at the discretion of the card issuing authority.'
                        },
                        {
                            question: 'Q37. What is cash advance',
                            ans: 'A card holder can use his/her credit card to withdraw cash at ATMs in India and even overseas. This facility is termed as cash advance. Cash advance transactions do not feature an interest fee period unlike purchases and thus finance charges are applicable from the date of withdrawal onwards. Cash advances are not eligible for reward points either.'
                        },
                        {
                            question: 'Q38. How much of my credit limit can I use for Cash Advance transactions',
                            ans: 'You can get cash advances on your credit card of up to 30%-40% of your total credit limit. Though this is the industry norm, you may be authorised for a higher or lower cash advance limit and this will be mentioned in your credit card agreement.'
                        },
                        {
                            question: 'Q39. What is Revolving Credit',
                            ans: 'Revolving credit is a type of credit that does not have a fixed number of payments, in contrast to installment credit (EMI). Credit cards are an example of revolving credit. He/she can make as many payments as required to pay off the due balance. If a customer pays off the credit card due partially then the balance amount will be carried forward to the next billing cycle.'
                        },
                        {
                            question: 'Q40. What is Charge Back',
                            ans: 'A chargeback or reversal is the return of funds to the cardholder’s account after a dispute has been filed by the card holder for one or more charges appearing on the credit card statement.  This occurs only after the money has been “charged” to the card holder’s account and credited “back” only after the customer lodges a chargeback request with the card issuer.'
                        }
                    ],
                },
                homeLoan: {
                    faqName: 'Home Loan',
                    faqs: [{
                            question: 'Q1.What is a Home Loan',
                            ans: 'Home loan is a loan disbursed by a bank or financial institution (lender) to an individual specifically for buying a residential property. Here, the lender holds the title of property until the loan is paid back in full along with interest.'
                        },
                        {
                            question: 'Q2. What is the tenure of a home loan',
                            ans: 'Home loans are long term borrowing instruments with a minimum tenure of 5 years and a maximum tenure of 30 years. The tenure offered to you for your personal loan depends on the loan amount that is sanctioned to you by the lender along with other factors.  '
                        },
                        {
                            question: 'Q3. What is the Eligibility Criteria for a Home Loan',
                            ans: 'Anyone — whether self employed or salaried individuals/professionals — with a regular source of income can apply for home loans. One must be at least 21 years old when the loan period begins and should not exceed an age of 65 years when the loan ends or at the time of superannuation. This is the generic eligibility criteria and specifics such as the minimum and maximum age limits, minimum income level, etc. may differ from one lender to another.    '
                        },
                        {
                            question: 'Q4. Why should I apply for a home loan on Paisabazaar',
                            ans: 'When you log on to the home loan section of Paisabazaar, you can apply for a home loan in minutes by following a few key steps:Find out the various lenders who would be interested in providing you with a home loan based on loan amount, income level and related criteria provided by you.Compare the home loan offers based on factors such as interest rates, processing fees and other relevant factors.Just choose and click to apply for the home loan with the specific provider with the click of a button.Subsequently your prospective lender will get in touch with you to get supporting documents and complete other formalities.In short by applying through Paisabazaar, the process of comparing and choosing home loans is simplified by saving you a lot of time and effort.   '
                        },
                        {
                            question: 'Q5. What do banks consider when granting a home loan',
                            ans: 'Once repayment capacity determines your eligibility to apply for home loan, lenders consider the following factors:Income level of the applicantAge  of the applicantQualification (stability and occupation continuity)Resident status (maximum limit for an Indian resident differs from that of a non-resident)Spouse\'s income (household income is taken into account when there is a co-applicant)No. of dependants (it is a measure of repayment capacity)Credit history and score (past repayment track record)Status of existing loans'
                        },
                        {
                            question: 'Q6. Can I apply for a joint loan with my friend',
                            ans: 'No. A lender would only allow you to apply for a joint home loan if the application is co-signed by one or more members of your immediate family. Thus, your friend does not qualify.   '
                        },
                        {
                            question: 'Q7. Who can be joint borrowers in case of a home loan',
                            ans: 'Immediate family members such as your parents, spouse and children are allowed to be joint borrowers in case of a home loan.  '
                        },
                        {
                            question: 'Q8. What is the maximum number of joint borrowers for a home loan',
                            ans: 'The maximum number of joint borrowers in case of a home loan is fixed at 6. However, only family members such as parents, siblings and spouse can be co-borrowers for a home loan in India. Additionally, having a co-borrower who has a robust credit history and good credit score is preferable as compared to one with a low credit score.'
                        },
                        {
                            question: 'Q9. What is floating rate home loan',
                            ans: 'If the interest rate on the loan varies periodically over the loan tenure, then it is called a floating rate home loan. Lenders have their own base rate which determines the rate of interest charged on a home loan. The base rates of banks are revised from time to time based on RBI directives as well as other factors, which leads to an increase or decrease in the EMI amount payable.      '
                        },
                        {
                            question: 'Q10. What is a fixed rate home loan',
                            ans: 'Fixed rate home loans are offered at a predetermined interest rate during the loan period and these remain unchanged during the loan period irrespective of market conditions. This can be a huge benefit when market volatility starts affecting interest rates. For instance, if the RBI increases interest rates on loans, then people with fixed rate home loan will not be affected by any increase or decrease in the market interest rates and the EMI amount will remain unchanged. This type of home loan is less popular these days.'
                        },
                        {
                            question: 'Q11. How is the MCLR method going to affect my current home loan',
                            ans: 'As per recently updated RBI rules, banks are required to use the MCLR (Marginal cost of lending rate) method to determine the interest rate on home loans. In case of a floating rate home loan, the banks are now required to change the interest rate either yearly or every six months. In case you have a fixed rate home loan, you can get in touch with your bank to get information regarding conversion of your fixed rate home loan to the new MCLR-based floating interest rate. At present, introduction of the new MCLR regime has led to a reduction in applicable home loan interest rates.  '
                        },
                        {
                            question: 'Q12. Can I switch from a floating rate home loan to a fixed rate',
                            ans: 'Yes. A few lenders do offer you the option of switching from a floating rate to a fixed rate home loan and the other way around. However, this is not applicable to all home loans and there are a few charges involved in implementing this conversion. Get in touch with your lender to get details regarding the procedure and requirements.   '
                        },
                        {
                            question: 'Q13. How do I repay my home loan',
                            ans: 'There are different ways to pay off your loan such as issuing post-dated cheques for the tenure of the home loan, getting the amount deducted automatically from your salary or by issuing standard instructions to the lender for ECS (Electronic Clearing System) wherein the EMI is automatically deducted from your bank every month.'
                        },
                        {
                            question: 'Q14. Should I apply for a home loan with a public or private bank',
                            ans: 'Before zeroing in on a home loan, it is best to compare the various interest rates that would be applicable to you. When you apply for a home loan through Paisabazaar, you get the opportunity to apply for a home loan through both private and public-sector banks. Also take into account, the fact that banks charge various processing and other related fees when you apply for a home loan and you should also consider these, when applying for a home loan.'
                        },
                        {
                            question: 'Q15. Is prepayment of home loan allowed',
                            ans: 'Yes, one can repay the loan amount before completion of the scheduled loan tenure by making a lump sum payment towards paying off the loan. In such cases, the bank may decide to apply some penalties in the range 2-3% of the principal amount outstanding. Some banks and NMFC (non-banking financial companies) do not charge any penalty on making prepayment of a home loan.'
                        },
                        {
                            question: 'Q16. What are the key charges associated with a home loan process',
                            ans: 'Processing Fee- When applying for a loan, a fee is paid to the lender known as processing fee. The amount paid could be either a percentage of the loan amount or a fixed amount that is paid in lieu of carrying out the loan sanction formalities. Commitment Fee- It is essential to avail the loan within a stipulated time period after it is processed and sanctioned otherwise some financial institutions levy a commitment fee. By paying the commitment fee, you are assured that you can access the loan at the interest rate and for the tenure that was initially agreed on. Most banks no longer charge this fee.   Pre-payment Charges- Banks/ financial institutions might charge a penalty if the entire loan amount is paid off before completion of the loan tenure. The penalty amount also known as foreclosure/pre-payment charges could be a maximum of 5% of the loan amount that is paid off before the completion of loan tenure.Miscellaneous charges- Documentation, stamp duty, credit bureau report issuance charges and consultant charges are generally considered as miscellaneous charges by few lenders.'
                        },
                        {
                            question: ' Q17. What documents do I need to submit with my home loan application',
                            ans: ' The documents that need to be submitted may vary from one lender to the other. Some of the necessary documents to be submitted include the following-Completed loan application formPassport size photographsIdentity proof – PAN card/Passport/ DL/ Voters IDResidence proof- telephone or electricity bill/ passport/ voter ID / property tax receiptBank statement for at least past 6 months and salary certificates/ latest acknowledged ITR  Copy of plan approved for the proposed construction/extensionCost estimation/ valuation report from Bank\'s (or finance company)  authorised surveyor/evaluator.Allotment letter of housing board/ NOC of the society/Builder etc. as well as any other land use certificate/other  '
                        },
                        {
                            question: ' Q18. Is there any tax benefit available on home loans',
                            ans: 'The tax benefit on home loan is divided into two sections-Tax exemption on repayment of the home loan principal: This is the deduction allowed under Tax Section 80C with a maximum annual tax deduction of Rs, 150,000 under the section.Tax benefit on the interest rate for home loan- Under Section 24 of the Income Tax Act, you can avail the tax benefit on the amount of interest paid on a home loan to the maximum limit of Rs. 2 lakhs for a self occupied property.  Tax benefit for Joint Borrowers: In case of joint home loans, each of the co-borrowers is eligible to receive a total of Rs. 3.5 lakhs (1.5 lakhs under section 80C + 2 lakhs under section 24) as tax exemption. Hence, if a married couple co-signs for a home loan, they can claim a total tax exemption of Rs. 7 lakhs on their home loan.  '
                        },
                        {
                            question: 'Q19. What is a top up loan',
                            ans: 'If you have an existing home loan and have made timely repayments towards the existing home loan, you may get the option of borrowing an additional loan equal to the amount you have paid off on your current home loan. This is termed as a top up loan. The interest rates on a top up loan are less than a personal loan and it requires little or no paperwork to process this loan and the money can be used for a range of expenses.   '
                        },
                        {
                            question: 'Q20. Can I have a co-applicant when I sign up for a home loan',
                            ans: 'Yes. You can have a family member like your spouse or your parents co-sign with your when you apply for a home loan. Having a co-signor for your home loan improves your chances of being approved for a larger home loan amount.  A co-signor is specially recommended if the primary applicant has a low credit score or has had problems when applying/paying off a loan in the past. '
                        },
                        {
                            question: 'Q21. Is having a good credit record important in case of a home loan',
                            ans: 'A home loan is a long term loan (5 to 30 years tenure), hence lenders want to ensure that they will get their money back in the long term. Therefore, the loan sanctioning authority will definitely check your credit history before sanctioning a home loan to you. By having a good credit record/history you would be classified as a low risk borrower and you may be able to get preferred (low) interest rates and waivers on various bank fees on the basis of your credit history.      '
                        },
                        {
                            question: 'Q22. I have low credit score. Can I still apply for a home loan',
                            ans: '  In case you have a poor credit score, you will find it difficult to get a home loan. However, you can improve your chances by getting a co-borrower. The co-borrower needs to be a family member like your spouse or parents. Ideally, you should choose a co-borrower who has a regular source of income and good credit history to bolter your chances of a successful application.'
                        },
                        {
                            question: 'Q23. What is pre-EMI Interest',
                            ans: 'When banks sanction you a home loan, the EMI payments may not start immediately. In such a situation, the bank is liable to charge a pre-EMI interest on your loan. This interest is payable monthly from the time the loan is disbursed till the time the EMI payments start off. The pre-EMI interest amount is lower than the home loan EMI as the principal payment portion is excluded for pre-EMI interest payments.'
                        },
                        {
                            question: 'Q24. What is the margin on a home loan',
                            ans: 'The margin on a home loan refers to the percentage of the cost of the home that is not covered by the lender providing you with the home loan. On an average, lenders implement a 20% margin on home loans i.e. the home loan amount sanctioned to you will be 80% of the actual cost of the property. The remaining 20% of the home loan cost will have to be borne by you. Though the 20% margin is the industry average, lenders may increase or decrease their home loan margins on a case by case basis.'
                        },
                        {
                            question: 'Q25. What costs are not covered by a home loan',
                            ans: 'Apart from the margin, some other costs will have to borne by you. Some of the key expenses in this regard include the initial down payment, stamp duty costs, registration costs and transfer charges among others.             '
                        },
                        {
                            question: 'Q26. What is an amortization schedule',
                            ans: 'Amortization is a table with details of interest payment and periodic principal of a loan along with the amount outstanding after each payment and the decrease of loan balance till zero.Rate of Interest differs according to the profile of the customer i.e. company name, salary.Loan amount varies from 50,000 to 35,00,000Processing Fees is the charges which bank incur while processing of Loan. These fees range from 1% to 4% of the loan amount.Personal loan has a specific repayment schedule 1 to 5 yearsEquated monthly Installment (EMI) comprise of Principal and Interest it is a fixed payment owed each month to repay the Loan'
                        },
                        {
                            question: ' Q27. What are the different types of home loan',
                            ans: 'There are various types of home loans depending upon your specific requirement. Some of the key ones are as follows:Land purchase loans: These loans are granted to individuals for the purchase of land on which they intend to build a house.Home purchase loans: These are the most common type of home loans that is granted to individuals and they are granted for the purchase of an apartment.Home construction loan: This type of loan is granted to individuals for the construction of a house on a plot of land that is already owned by the applicant.Home Expansion/Extension Loan: This loan is specifically granted to individuals who want to expand their current home to include a new construction such as an additional floor, room, bathroom, etc.Home Improvement Loan: Existing home owners who lack sufficient funds to renovate their existing home can apply for this loan to upgrade their home with a new paint job, electrical wiring, water proofing, etc.Home conversion loans: Using this type of home loan, an existing home owner can add to their existing loan so that they can purchase a new house. This type of loan is only applicable to existing home owners.NRI Home Loans: These home loans are specifically designed to provide non-resident Indians with financing so that they can purchase a home in India.  '
                        },
                        {
                            question: 'Q28. If I have a current home loan and want to move to a new house, what option do I have',
                            ans: 'You best option is to apply for a home conversion loan. Using this type of loan, you can add to your existing home loan and purchase the new one without having to opt for a second home loan.'
                        },
                        {
                            question: 'Q29. What is Home loan preapproval',
                            ans: 'Home loan pre-approval is a facility provided by banks and NBFCs to their customers, which allow those interested in purchasing a house with the particulars regarding their eligibility even before they have decided on a property to purchase. '
                        },
                        {
                            question: 'Q30. How long is the home loan pre-approval valid',
                            ans: 'The pre-approved home loan offer is valid for only a limited period, which varies from one bank to another as per the lender’s internal rules and regulations. However, these pre-approvals are usually valid for no more than 6 months.'
                        },
                        {
                            question: 'Q31. How do home loan requirements vary for an apartment and a plot of land',
                            ans: 'When you take a home loan for an apartment, you technically apply for a home purchase loan. This type of loan is the most common one that is provided to individuals and is eligible for tax benefits under section 24 and section 80C. In case you want to purchase a plot of land for building your house at a later date, you have to apply for a land purchase loan and there is currently no tax exemption benefit for this type of loan. '
                        },
                        {
                            question: 'Q32. What are the top home loan providers in India',
                            ans: ' Due to the huge demand of home loans, banks and NBFCs across India provide home loans to their customers. Some of the leading banks who provide home loans to individuals include HDFC Bank, Axis Bank, ICICI Bank, State Bank of India and associates, Bank of Baroda, RBL Bank and many others. Leading NBFCs in India that provide home loans in India include India Bulls, Bajaj Finance, Financiers, LIC Housing Finance and may others.'
                        }
                    ],
                },
                savingsAccount: {
                    faqName: 'Savings Account',
                    faqs: [{
                            question: '1. What is Savings Account',
                            ans: 'A deposit account held at a bank or other financial institution that provides principal security, a modest interest rate and high degree of liquidity, is termed as a savings account. Savings account funds are considered one of the most liquid investments apart from cash. Savings accounts are thus ideal for keeping emergency money or money for daily expenses that you might need at a later date.'
                        },
                        {
                            question: '2. Who provides savings accounts',
                            ans: 'Savings accounts are the key business of commercial banks operating in India, hence to open a savings account, all you need to do is fill out a simple form on Paisabazaar.com and you will get a variety of options regarding which banks provide savings accounts that suit your requirement. You can compare various options based on interest rate, minimum balance requirement as well as other offers. Once you have made your choice, fill out the online form and provide them with accepted identification and other relevant documentation.'
                        },
                        {
                            question: '3. How do I choose the best Savings Account for me',
                            ans: ' Factors that need to be considered while choosing the right bank to open a savings account with include interest rate offered on your deposit, minimum balance required to maintain your account, customer service, branch availability and other factors. A bank that offers the best combination of these factors should be opted for when opening the savings bank account.'
                        },
                        {
                            question: 'Q4. What are the various types of Savings accounts',
                            ans: ' Apart from the regular savings accounts, following are some of the other types of savings accounts available at banks in India: Joint Account: This is a savings account than can be operated by more than one account holder. Though most joint accounts featured 2 account holders, currently some banks allow up to 4 joint holders of a single account.Woman’s Savings Account: A woman’s savings account can only be opened by a woman and special features and interest rates are applicable to this account.Senior Citizens’ Savings Account: This type of account can only be opened by a person who is aged over 60 years of age. There are a number of fee waivers and preferred rates offered in case of such accounts.Minors’ Account: In this type of account, the minor child is the second holder of the account, while the parent or guardian is the primary holder. This type of account may be set up by parents at a young age to help their children understand banking and savings.Salary Account: This is a special type of savings account in which, the minimum balance clause is waived off. An individual can hold only one salary account at a time and apart from the zero balance benefit, a salary account may have other benefits as well.'
                        },
                        {
                            question: 'Q6. Are there any restrictions with regard to age, income etc. for opening a basic Savings Account by banks for individuals',
                            ans: ' There are no restrictions imposed with regard to age or income of an individual at the time of opening a savings account. There however may be different minimum balance requirements based on the type of type of savings account.'
                        },
                        {
                            question: 'Q7. Is there a minimum opening balance for a savings account',
                            ans: ' The minimum opening balance for a savings account differs from bank to bank and depends on the features and services once would like to avail at the time of opening an account. Normally, it ranges between Rs 0 and Rs 25, 000 for regular customers and may go up to Rs. 2,00,000 or even higher for premium customers.'
                        },
                        {
                            question: 'Q8. What are the various types of accounts based on minimum balance requirements',
                            ans: ' Depending upon the minimum balance requirement, savings accounts may be classified into 3 key categories – Classic, Gold and Platinum. In case of classic accounts, the minimum balance requirement for the savings account is Rs. 10,000, while for Gold category accounts; the minimum balance requirement is between 10,000 and 25,000. In case of a Platinum category account, the minimum balance requirement is greater than 25,000 (usually Rs. 50,000 or Rs. 1, 00,000). The services and freebies offered usually differ from one type of account to another, with Platinum accounts featuring the greatest number of features.'
                        },
                        {
                            question: 'Q9.  What are the charges levied on my account if the required minimum monthly balance is not maintained',
                            ans: ' According to RBI guidelines, banks cannot penalise you for not maintaining the minimum balance in a dormant account.  For operational accounts that have a balance lower than the prescribed minimum balance amount as per the account type, the bank is liable to charge a non-maintenance fee as per the bank’s procedures in addition to the Service Tax and Education Cess at the applicable rates.  However, not all banks or account types feature these charges.'
                        },
                        {
                            question: 'Q10. How is the average monthly balance calculated',
                            ans: ' To calculate the average monthly balance, banks consider the total of daily closing credit balance of each day during the month and divide it by the number of days in the month. If the average is less than the requirement, charges for non-maintenance will be levied at the beginning of the next month. For complete details on charges for non-maintenance of AMB, get in touch with your bank.'
                        },
                        {
                            question: 'Q11. Is there a difference between a private bank savings account and one offered by a public bank',
                            ans: ' In terms of operation, the services offered by a public sector bank and a private sector bank are the same, however, there are some notable differences between these savings accounts in other areas. The minimum balance requirements are often higher in case of a private bank savings account as compared to a public sector bank. On the other hand, the free of charge benefits offered by the public sector bank are often much greater than those offered by a public-sector bank.'
                        },
                        {
                            question: 'Q12. At what rate will I earn interest on the balance in my Savings Account',
                            ans: ' The rate at which interest is calculated in a savings account is usually in the range of 4%–7% per annum. SBI usually offers 4% on its deposits while Yes Bank, RBL Bank and Kotak Bank offer 6%.      '
                        },
                        {
                            question: 'Q13. When is the interest earned on my saving account deposited/credited into my account',
                            ans: ' Interest earned on your Savings Account balance is credited to your account on a half yearly basis. However, the interest is calculated either monthly or on an average daily balance basis.'
                        },
                        {
                            question: 'Q14. Can I open a joint account',
                            ans: ' Who are eligible for joint account holders'
                        },
                        {
                            question: 'Q15. Is there any benefit of opening a Fixed Deposit account and a savings bank account together',
                            ans: ' Yes. If you decide to open a fixed deposit account and a savings bank account at the same time, many banks provide you with the benefit of fee waivers and additionally, the minimum balance requirement for your savings account is waived by many banks,'
                        },
                        {
                            question: 'Q16. When does a savings account become dormant',
                            ans: ' As per the guidelines issued by Reserve Bank of India (RBI), the account becomes dormant if the customer does not initiate transactions (withdrawal of cash at a branch/ATM, payment by cheque, transfer of funds through Internet Banking/Phone Banking/ATMs etc) for a continuous period of two years. Your facility to transact through direct banking channels such as ATM, NetBanking, PhoneBanking, etc. is also restricted by the bank in the case of an inactive account.'
                        },
                        {
                            question: 'Q17. How do I activate a ‘Dormant’ Savings Account',
                            ans: ' In order to activate a dormant account, you will have to: Contact your  branch in personSubmit a written request for activation of your dormant accountProduce and submit copies of current proof of identity and address for verificationInitiate a transaction using cash or cheque to activate your account again.'
                        },
                        {
                            question: ' Q18. What are the benefits offered by senior citizens savings account',
                            ans: 'Some of the benefits offered to senior citizens are: Free passbook facilityFree cash withdrawal facility at any bank’s ATMFree SMS alerts to keep track of transactions  taking place in your accountEasy payment of utility and other bills using online bankingDiscounts at partner diagnostic centres and hospitals across the countryPriority service  at bank branches'
                        },
                        {
                            question: 'Q19. What does an ATM Card Debit Card do',
                            ans: ' An ATM card cum debit card allows you to carry out multiple transactions using the balance deposited in your account. Firstly, you can withdraw cash at any ATM any time of the day using such a card linked to your savings account. Additional transactions at the ATM using your card may include mobile phone recharge, bill payment, transfer of money to another person and much more. Apart from the ATM-based transactions, you can also carryout purchases using your ATM cum debit card at any POS (point of sales) machines at stores, restaurants, etc.'
                        },
                        {
                            question: 'Q20. Can I use my ATM cum Debit card for online purchases',
                            ans: ' Yes an ATM cum debit card can be used for online purchases. However, you will have to register with MasterCard Secure Code, Verified by VISA or a similar service in order to complete the online purchase process. In some cases, using your debit card for purchases can earn you rewards such as cash back or reward points on your purchase.'
                        },
                        {
                            question: 'Q21. Can I use my ATM cum Debit card for international purchases',
                            ans: ' Yes. Many ATM cum Debit cards are enabled with international payments support. However, you may have to let your ATM cum Debit card issuer know that you intend to use your card at a location outside of India so that any block that may be present is removed before you use your ATM cum debit card overseas.'
                        },
                        {
                            question: 'Q22. Can I open a DEMAT Account with my Savings Account',
                            ans: ' Yes, DEMAT Account can be opened along with your Savings Account. DEMAT accounts are required to trade in various stock market instruments and they often feature charges separate from the savings account.'
                        },
                        {
                            question: 'Q23. How do we add/modify or delete a nominee for my savings account',
                            ans: ' It is a very easy procedure and all one has to do is obtain a form from the branch or download it online. Once you have filled the form, deposit it to your nearest branch. You can also call your bank to check if it can be changed online using your NET banking facility. If you are able to change it using NET banking, you may not have to physically visit the branch.  '
                        },
                        {
                            question: 'Q24. How can I request for Physical copy of bank statement',
                            ans: ' Your bank account statement can be downloaded using the net banking facility offered by your bank. However, if you have not registered yourself as a net banking customer, you can alternatively, request your bank using telephone banking to send your bank statement. The statement will be delivered to your registered home address with 7 working days.  '
                        },
                        {
                            question: 'Q25. How do I deposit money into my savings account',
                            ans: ' You can deposit money into your savings account through cash, cheque or bank draft. Drafts and cheques can be deposited at registered drop box locations of the bank (usually at ATMs and bank branches). Cash may be deposited at certain ATM machines that have deposit acceptance capability or at the cash counter of the bank during working hours.'
                        },
                        {
                            question: 'Q26. How do I withdraw money from my account',
                            ans: ' You can withdraw money from your account using a debit card linked to your ATM at any ATM 24×7. Other options include cashing a cheque linked to your credit account in person at the bank branch or a cash withdrawal using a withdrawal slip in case you account does not have the cheque book facility.'
                        },
                        {
                            question: 'Q27. Are there any charges for cheque books and ATM cards',
                            ans: ' Most banks provide you with one free cheque book of 20 leaves every quarter, however, the number may vary from one bank to another as well as from one type of account to another. ATM (automated telling machine) cards also have a yearly fee plus taxes on their use. However, the fee may be waived in case you make debit purchases using your card beyond an annual limit prescribed by the bank.'
                        },
                        {
                            question: 'Q28. What are the charges that I need to pay for requesting a copy of my bank statement',
                            ans: ' Banks usually levy a charge of up to Rs 100 in case you request for a copy of your bank statement. Transactions up to the last 90 days are usually provided online at no extra cost. For a statement which transactions that are more that 90 days old, the bank may levy a charge.'
                        },
                        {
                            question: 'Q29. What are the different ways I can transfer money from one savings account to another',
                            ans: ' In case of domestic transfers i.e. transfer of money from one savings bank account to another in India; you can do any of the following: Cash/Cheque DepositNEFT/RTGS TransferIMPS – Interbank Mobile Payment ServicesQ30. What is a NEFT Transfer'
                        },
                        {
                            question: 'Q31. What is a RTGS Transfer',
                            ans: 'From the user’s perspective, RTGS or Real Time Gross Settlement is very similar to NEFT and it requires similar data to complete the transfer and similar operational hours. The minimum amount for RTGS is Rs. 2 lakhs, while the maximum amount is Rs. 10 lakhs for a RTGS transfer.'
                        },
                        {
                            question: 'Q32. What is IMPS',
                            ans: 'IMPS stands for Interbank Mobile Payment Service (IMPS). Using this service, account holders with some of the key banks in India, can send money to beneficiaries using just their mobile phones. The service is available 24 hours a day and even on Public Holidays. The IMPS transfer system has now been extended beyond customer to customer transfer to include bill payments such as merchant payments as well. There are charges applicable for this service and these charges may vary slightly from one bank to another.'
                        },
                        {
                            question: 'Q33. How do I use a mobile app to access my account',
                            ans: 'Most banks in India have introduced various mobile applications designed to promote on-the-go banking services to their customers. These applications can be downloaded from licensed app stores of Google and Apple. Once you have downloaded and installed the app, you will have to register for the service using your cell phone. After completion of the installation process, you have to register for the service and then you can use your phone app to access your savings bank account.'
                        },
                        {
                            question: 'Q34. How do traditional savings bank accounts differ from a payment bank accounts',
                            ans: 'Payment banks are a relatively new concept and they are being developed to mainly help out the relatively unbanked segments like migrant workforce, small businesses and low income households. Though a payment bank account may issue ATM/debit cards, this type of account can only accept deposits of Rs. 1 lakhs or less in a year. Moreover, payment banks cannot issue credit cards or provide loans to their customers. The payment bank would earn money on every transaction you make through your payment account, therefore, no minimum balance criteria is applicable.'
                        }
                    ]
                },
                carLoan: {
                    faqName: 'Car Loan',
                    faqs: [{
                            question: 'Q1. What is a car loan',
                            ans: 'A car loan is a borrowing instrument that a lender such as a bank or NBFC (non-banking financial company) provides an individual allowing him/her to purchase a car. Car loans have gained popularity in recent times as instead of being a luxury item or a symbol of status, cars have grown to become an essential commodity for the continuously growing middle class of India. With the increased popularity of car loans, most banks and NBFCs currently offer this type of loan to individuals who have a good credit history. One point to keep in mind regarding a car loan is the fact that this loan invests in a depreciating asset i.e. the asset (car) bought using this loan is in fact going to cost less over time.'
                        },
                        {
                            question: 'Q2. Can I get a loan to purchase a used car',
                            ans: 'Yes, car loan is offered for pre-used cars. But, the interest rate for such a loan would differ from that of a new car. However, the loan would only cover the price of the car itself, other costs as transfer of registration, etc. will have to borne by you.'
                        },
                        {
                            question: 'Q3. Do I need collateral for a car loan',
                            ans: 'Just as the name suggests, a car loan is a loan granted to an individual interested in buying a car. Therefore a car loan is a secured loan where the car you buy acts as a collateral. Therefore, there is no additional collateral requirement for a car loan. However, you do have to get the RC (registration certificate) of the car endorsed with the bank. This endorsement is cancelled after repayment of the loan is completed.'
                        },
                        {
                            question: 'Q4. What are the benefits of applying for a car loan with Paisabazaar',
                            ans: 'When you input your basic details into the Paisabazaar.com car loan eligibility tool, we provide you with all available options based on the information you provide us. After you get the complete list of lenders who might suit your specific requirement you can compare the various loan options based on tenure, interest rate, maximum loan amount as well as other factors. You can then go ahead and zero in on the offer that is best suited to your specific requirement. Paisabazaar streamlines the loan selection process, allowing you to derive the maximum benefits from your car loan.'
                        },
                        {
                            question: 'Q5. What is the maximum amount of loan that I can avail',
                            ans: 'The maximum loan amount approved may vary from one bank to the other. Usually, banks approve loan amounts that range from 80%–90% of the car’s on-road price. Few banks even lend 100% of the car’s ex-showroom price. In addition to these criteria, the percentage of financing offered depends on the price, type of car (standard/ premium) and whether you are applying for a new or pre-owned car.'
                        },
                        {
                            question: 'Q6. What documents do I need to submit when applying for a car loan',
                            ans: 'Like any other loan that you apply for, a car loan application requires self attested supporting documents such as income (last three pay slips/last acknowledged ITR), address and identity proof documents along with you PAN card. Other documentation requirements, if any, tend to differ from one lender to another.'
                        },
                        {
                            question: 'Q7. What is the typical tenure of a car loan',
                            ans: 'The tenure of a car loan ranges from 1 year to 5 years. The shorter the loan tenure, the higher is the EMI payable and the reverse is true for longer car loan tenures. Currently, a small number of lenders are engaged in providing car loans for longer durations of up to 7 years.'
                        },
                        {
                            question: 'Q8. Is there a minimum salary requirement to apply for a car loan',
                            ans: 'Though most lenders do not specify a minimum salary requirement, your loan application may be rejected in case your salary does not exceed a predetermined threshold level as required by the internal requirement of the bank. In such cases applying with a co-borrower might be a better idea to increase your chances of successfully applying for a car loan.'
                        },
                        {
                            question: 'Q9. Do I need a loan guarantor or co-borrower',
                            ans: 'A loan guarantor or a co-borrower is only required if you are unable to meet the eligibility criteria stated by the lending institution such as monthly income, age or credit score. Otherwise you can apply for a car loan on your own.'
                        },
                        {
                            question: 'Q10. In which cases can my car loan application be rejected',
                            ans: 'Your loan application may be rejected if you have a bad credit score, have defaulted on your repayments or applied for and been rejected for loans multiple times, etc. Also, you should meet the bank’s eligibility criteria such as minimum income level, age, previous relationship with the bank, etc. to get your loan approved.'
                        },
                        {
                            question: 'Q11. Are there any tax benefits of a car loan',
                            ans: 'No. Unlike a home loan, a car loan has no tax savings benefits what so ever. Therefore car loan amounts should always be tied to your actual requirement and splurging on a fancy car by taking a large loan amount is not a good idea.'
                        },
                        {
                            question: 'Q12. What is the difference between a fixed rate and a floating rate car loan',
                            ans: 'In case of a fixed rate car loan, the rate of interest applicable on the car loan remains the same over a period of time. Therefore fixed rate car loans have a specific EMI payout requirement that does not change due to market conditions. In case of a floating rate car loan, the applicable interest rate of the car loan varies periodically as per the decision of the lender. Thus the payable EMI on a floating rate loan may change from time to time.'
                        },
                        {
                            question: 'Q13. Can interest rates be negotiated',
                            ans: 'Yes, you can negotiate the interest rate applicable to your car loan by leveraging your credit history and prior relationship with the prospective lender. The regular payment of EMIs for previous loan/credit cards you had/have with your prospective lender can fetch you a car loan at a preferred (lower) interest rate.'
                        },
                        {
                            question: 'Q14. How does the implementation of MCLR change the car loan EMI',
                            ans: 'As per the RBI directive, from April 2016 onwards, banks are using MCLR (marginal cost of lending rate) to fix the interest rate on various loans including car loans. Currently the MCLR-based car loan rates are slightly lower than the base rate method that banks used earlier. However, changes in CRR, margin, bank operating expenses and deposit interest rates will change the MCLR and by extension the interest rates offered on car loans. Moreover, as per the new regulations, banks are required to revise their loan interest rates every 6 months or on a yearly basis.'
                        },
                        {
                            question: 'Q15. Can I get financing for insurance and registration',
                            ans: 'Car loans do not cover the insurance or registration fees that you have to pay at the time of buying the vehicle. Car insurance, which is mandatory, needs to be purchased separately and all vehicle registration-related costs also have to be borne by you as they are not covered by your car loan. However, there are few banks that cover these costs under special schemes.'
                        },
                        {
                            question: 'Q16. Can I pre-pay my car loan',
                            ans: 'Pre-payment of car loans is allowed by many lenders however there are usually a few terms and conditions attached. For starters, the lenders only allow car loan repayment after you have completed specified loan tenure and there is usually a pre-payment penalty as well. The prepayment penalty charges usually range from 1%-4% of the. It is recommended that you confirm all relevant charges with a bank before you make a pre-payment.'
                        },
                        {
                            question: 'Q17. Can I sell my car before repayment of the car loan is completed',
                            ans: 'No. Lenders who provide car loans to individuals only allow the car to be sold to a new owner when the loan has been paid off in full. This is because, you need to a get a NOC from the bank before you can sell you car and the document is released only after you have paid off the car loan in full.'
                        },
                        {
                            question: 'Q18. How can I make my loan EMI payments',
                            ans: 'Repayment of loan can be done through post dated cheques (PDC) provided by you to your lender when signing up for the car loan. The other option is an auto debit facility where the EMI is automatically debited from your savings account after you have provided an ECS (Electronic Clearing Service) mandate to the lender.  '
                        },
                        {
                            question: 'Q19. What if I don\'t pay EMIs on time',
                            ans: 'Generally, banks treat you as a defaulter if you fail to pay two or more EMIs in a timely manner. You will initially be charged a penalty fee and asked to regularise your payments. If you fail to regularise your payments after repeated notifications, the financial institution can legally repossess your vehicle. Subsequently, your credit score will also take a hit and in the future, you will face complications in future loan approvals.'
                        },
                        {
                            question: 'Q20. What should I do after paying the last EMI',
                            ans: 'Once you have paid off your loan in full, the bank issues Form 35 & NOC (No Objection Certificate) to the RTO (Road Transport Office) and the lender’s name will get removed from the RC book endorsement.'
                        },
                        {
                            question: 'Q21. Should I take a loan from the bank where I have an account',
                            ans: 'Instead of going to separate banks in order to find the best car loan deal, log on to Paisabazaar.com and input your basic information. Within minutes you will have a range of options at your finger tips and you can compare available options to zero in on the one that’s best for you. Moreover, it is not mandatory to have an account with the bank which you approach for a loan. You can quite certainly opt for a loan with the bank that offers you the lowest interest rate. But, availing loan from a bank or a lender you have previous experience with may help you get hassle-free approval, faster processing, waiver of processing fees, etc.'
                        },
                        {
                            question: 'Q22. What is zero percent Financing',
                            ans: 'Zero percent financing is an offer provided by a few automobile manufacturers in collaboration with the lender. Under this plan, the automobile manufacturer is responsible for paying back the interest on the car loan to the financier instead of the borrower.'
                        },
                        {
                            question: 'Q23. Why are zero percent financing car models more expensive than the other ones',
                            ans: 'As the manufacturer is liable to pay the interest component of the car loan, the manufacturer would have to maintain a higher profit margin on the sale. That is the reason why, the cost of zero financing car models is usually greater than the cost of car models that do not have this feature.     '
                        },
                        {
                            question: 'Q24. Are there any special terms and conditions associated with the zero percent financing option',
                            ans: 'There are usually quite a few terms and conditions in case of zero financing options that are not usually applicable in case of a standard car loan. For example, the usual tenure of a zero financing loan ranges from 12 months to 15 months hence your premium payments will be much higher than that in case of a standard car loan. Additionally, you often have to pay a much larger down payment amount as compared to the standard car loan, which is bound to stretch your monthly budget.'
                        },
                        {
                            question: 'Q25. What are some of the top car loan providers in India',
                            ans: 'Car loans are provided by most traditional banks including HDFC Bank, SBI, ICICI Bank, Union Bank, Kotak Bank, Axis Bank and many others. You can easily apply for a car loan with these as well as many others banks through Paisabazaar.'
                        },
                        {
                            question: 'Q26. Can I take a car loan from lenders other than traditional banks',
                            ans: 'Yes. Through Paisabazaar you can apply for a car loan with traditional banks as well as with NBFCs. You can take a car loan from a number of NBFCs (non-banking financial companies) that offer car loans to individuals. Some of the leading NBFCs that provide car loans to prospective car purchasers include Mahindra Finance, L&T, AU Financiers, Bajaj Allianz, Sundaram Finance, Reliance Consumer Finance and others. Car loan offers from NBFCs are often as competitive as those offered by traditional banks.'
                        }
                    ],
                },
                data: {}
            }
        },
        methods: {
            openDialog(name) {
                this.data = Object.assign({}, this[name]);
                return true;
            },
            closeDialog() {
                this.data = Object.assign({}, {});
                this.dialog = false;
            },
            updatePath(path) {
                router.replace(path);
            }
        }
    }
</script>

<style scoped>
    .buttons {
        margin-top: auto;
    }
    .shape {
        height: 100px;
        width: 70%;
    }
    .routeBtns {
        height: 50px;
        width: 34%;
    }
</style>