# airbnb-lite

#### Airbnb-lite is an application modeled on the popular property hosting site airbnb that allows people to view spots, make-booking for the spots and leave reviews on spots they've stayed at. It is written with a frontend using React, Redux, and Javascript while the backend is built using express.js, javascript, and Sequele(PSQL). #### 

#### Link: [airbnb-lite](https://auth-me-app.herokuapp.com/)

*Landing Page:*

![Alt Text](https://newawsairbnblite.s3.us-east-2.amazonaws.com/Screen%20Shot%202021-05-03%20at%203.10.33%20AM.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMSJHMEUCIFA7P6kV%2FYbE%2FwrGaZaNG4wbpkaq0YQKNywMVkqUseAYAiEAvuzXgyy4wGkuFHMKHXoZ6ROYXETcga7FGPXjBFddlSUq%2FwII0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1NDY3NzkwMTczNjUiDDtLPjW8VfH%2F9%2FzBlirTAkh4wmizNJaW%2FD3xmiBm%2FJgBS3p9T5dsf7zESi1mEWJxg6Uye9RAeY8GEoAqV5NmFWjfcAN4xMpz501zG3iVanh%2Bw7%2BhAcdZJny%2Bkm%2FBIwZv%2BDauallZbZxgEjw8naTvvIxJLm4Lk56PnNBurcBYzG9fml3EjEtQbwjjii7D%2FxMxdkHc4vUEqGDd1ta2%2B5MGBy9%2FhdggdvRIg7B61vZ1UUmyGJ4JmsLD6bTvYH%2BjfSCBS2ESqMvmi%2BTq1e7sF3sTR5z6ylUvIPoCd%2BKRvnqZ1jIOx8l1yApkhRmd50e2L4goFaK1jSBaF1qXUdIEY3NPfXs6CQn9Ywvh5pRo0Ix9xC7u1sCSOyxQDixW3qbSaG9w2qugmsr4rHNf71lHEAthL7jzLObZG5AR5KkWr16KOfMm%2Fj6BCkgAvUX3hua95o13JnWzx0YK%2BU%2BU6S2oSTBWLlWIHTD9mb%2BEBjqzAswOzJXEIvmylON%2F%2FRVezkbvZ%2F3FTWd5yxp6RPPmplIhV37lqNPnSXYp%2FPSap1RwuCinN4x6j8Kpo%2BySmVH4nIPdaNYbDQuTst9DimlRUyq2YC3CY%2FOMRd5XF8F%2Ff5jUCRiAwGmH7yll1Hnt%2FTedlVE1dISkelSlFZRd1nGz2b85SKiKtjYDqvMPXa9KD4JXaPQij7uAiLytZvgXu1si6ASF6jA8Bn%2BclWLtAj1%2BNV2nquCrcnwis9A0%2F3z39E6AlmP42%2FsU%2BdJFovBZ5w0KQd2N2Zd9QjTLxl9cBr4CF1nBDqBDukSNZJ7VHqgODqorSD80Vcy8QWbeiUGVVt4TkD6ZLPfXWhGrpzQ2hv2qGZpeVZh2w7EqwLRb41ypHNP%2BPS9yCYaPBCyokStda6fllGCbMKw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210503T101759Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAX6TURWCKYSMZK5FX%2F20210503%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=3a99bc10e075f6132810c4d4b7a030f7e1f6e0eb28d73fe51d7aa42de88cc22b)

*Spots Page(Google Maps API):*

![Alt Text](https://newawsairbnblite.s3.us-east-2.amazonaws.com/Screen%20Shot%202021-05-03%20at%203.11.11%20AM.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMSJHMEUCIFA7P6kV%2FYbE%2FwrGaZaNG4wbpkaq0YQKNywMVkqUseAYAiEAvuzXgyy4wGkuFHMKHXoZ6ROYXETcga7FGPXjBFddlSUq%2FwII0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1NDY3NzkwMTczNjUiDDtLPjW8VfH%2F9%2FzBlirTAkh4wmizNJaW%2FD3xmiBm%2FJgBS3p9T5dsf7zESi1mEWJxg6Uye9RAeY8GEoAqV5NmFWjfcAN4xMpz501zG3iVanh%2Bw7%2BhAcdZJny%2Bkm%2FBIwZv%2BDauallZbZxgEjw8naTvvIxJLm4Lk56PnNBurcBYzG9fml3EjEtQbwjjii7D%2FxMxdkHc4vUEqGDd1ta2%2B5MGBy9%2FhdggdvRIg7B61vZ1UUmyGJ4JmsLD6bTvYH%2BjfSCBS2ESqMvmi%2BTq1e7sF3sTR5z6ylUvIPoCd%2BKRvnqZ1jIOx8l1yApkhRmd50e2L4goFaK1jSBaF1qXUdIEY3NPfXs6CQn9Ywvh5pRo0Ix9xC7u1sCSOyxQDixW3qbSaG9w2qugmsr4rHNf71lHEAthL7jzLObZG5AR5KkWr16KOfMm%2Fj6BCkgAvUX3hua95o13JnWzx0YK%2BU%2BU6S2oSTBWLlWIHTD9mb%2BEBjqzAswOzJXEIvmylON%2F%2FRVezkbvZ%2F3FTWd5yxp6RPPmplIhV37lqNPnSXYp%2FPSap1RwuCinN4x6j8Kpo%2BySmVH4nIPdaNYbDQuTst9DimlRUyq2YC3CY%2FOMRd5XF8F%2Ff5jUCRiAwGmH7yll1Hnt%2FTedlVE1dISkelSlFZRd1nGz2b85SKiKtjYDqvMPXa9KD4JXaPQij7uAiLytZvgXu1si6ASF6jA8Bn%2BclWLtAj1%2BNV2nquCrcnwis9A0%2F3z39E6AlmP42%2FsU%2BdJFovBZ5w0KQd2N2Zd9QjTLxl9cBr4CF1nBDqBDukSNZJ7VHqgODqorSD80Vcy8QWbeiUGVVt4TkD6ZLPfXWhGrpzQ2hv2qGZpeVZh2w7EqwLRb41ypHNP%2BPS9yCYaPBCyokStda6fllGCbMKw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210503T101854Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAX6TURWCKYSMZK5FX%2F20210503%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=adddae09255261620662a20d07c7271b5a5320e32295e67f39b1690cf8220c50)


*Users History Modal:*
![Alt Text](https://newawsairbnblite.s3.us-east-2.amazonaws.com/Screen%20Shot%202021-05-03%20at%203.12.05%20AM.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMSJHMEUCIFA7P6kV%2FYbE%2FwrGaZaNG4wbpkaq0YQKNywMVkqUseAYAiEAvuzXgyy4wGkuFHMKHXoZ6ROYXETcga7FGPXjBFddlSUq%2FwII0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1NDY3NzkwMTczNjUiDDtLPjW8VfH%2F9%2FzBlirTAkh4wmizNJaW%2FD3xmiBm%2FJgBS3p9T5dsf7zESi1mEWJxg6Uye9RAeY8GEoAqV5NmFWjfcAN4xMpz501zG3iVanh%2Bw7%2BhAcdZJny%2Bkm%2FBIwZv%2BDauallZbZxgEjw8naTvvIxJLm4Lk56PnNBurcBYzG9fml3EjEtQbwjjii7D%2FxMxdkHc4vUEqGDd1ta2%2B5MGBy9%2FhdggdvRIg7B61vZ1UUmyGJ4JmsLD6bTvYH%2BjfSCBS2ESqMvmi%2BTq1e7sF3sTR5z6ylUvIPoCd%2BKRvnqZ1jIOx8l1yApkhRmd50e2L4goFaK1jSBaF1qXUdIEY3NPfXs6CQn9Ywvh5pRo0Ix9xC7u1sCSOyxQDixW3qbSaG9w2qugmsr4rHNf71lHEAthL7jzLObZG5AR5KkWr16KOfMm%2Fj6BCkgAvUX3hua95o13JnWzx0YK%2BU%2BU6S2oSTBWLlWIHTD9mb%2BEBjqzAswOzJXEIvmylON%2F%2FRVezkbvZ%2F3FTWd5yxp6RPPmplIhV37lqNPnSXYp%2FPSap1RwuCinN4x6j8Kpo%2BySmVH4nIPdaNYbDQuTst9DimlRUyq2YC3CY%2FOMRd5XF8F%2Ff5jUCRiAwGmH7yll1Hnt%2FTedlVE1dISkelSlFZRd1nGz2b85SKiKtjYDqvMPXa9KD4JXaPQij7uAiLytZvgXu1si6ASF6jA8Bn%2BclWLtAj1%2BNV2nquCrcnwis9A0%2F3z39E6AlmP42%2FsU%2BdJFovBZ5w0KQd2N2Zd9QjTLxl9cBr4CF1nBDqBDukSNZJ7VHqgODqorSD80Vcy8QWbeiUGVVt4TkD6ZLPfXWhGrpzQ2hv2qGZpeVZh2w7EqwLRb41ypHNP%2BPS9yCYaPBCyokStda6fllGCbMKw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210503T102104Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAX6TURWCKYSMZK5FX%2F20210503%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=cfc2c913a0faa19ed7fd6bd0749604ca3d51fb36a8dd2141b8a1f2b039757b48)
### Features ###

* Sign-up and login with credentials
* Animated Auto-fill for demo user
* Logged in user can create booking
* Logged in user can leave review, for spots they've stayed at.
* Logged in search for spots based on availabel check-in/check-out dates and number of guests
* Logged grab spots based on, Ratings, infants/children allowed, and any spot.
* Logged in user can access history tan in profile button drop-down to perform CRUD operations on reviews and bookings.


### Technical Details/Highlights ###
* Auto-Fill Demo-User
    * Using my understanding of recurion, the structure behind the execution of javascript, and the tools provided by React; I was able to build an auto-filling demo form.
    * I approached building the feature as a toy-problem like challenge for myself. Which I succeeded at.

Part of the code:
```
// DemoSignupFormModal/DemoSignupForm
  const updateFunc = async () => {
        await sleep(100)
        if (emailArr.length) {
            setEmail(email + emailArr[0])
            setEmailArr(emailArr.slice(1, emailArr.length))
        } else if (usernameArr.length) {
            setUsername(username + usernameArr[0])
            setUsernameArr(usernameArr.slice(1, usernameArr.length))
        } else if (passwordArr.length) {
            setPassword(password + passwordArr[0])
            setPasswordArr(passwordArr.slice(1, passwordArr.length))
        } else if (confirmPasswordArr.length) {
            setConfirmPassword(confirmPassword + confirmPasswordArr[0])
            setConfirmPasswordArr(confirmPasswordArr.slice(1, confirmPasswordArr.length))
        } else {
            handleSubmit()
        }
    }
```

* Not Knowing The Code: 
    * Another challenge which I enjoyed, was not knowing every aspect of the code, yet I was able to still debug and manipulte code to do what I wanted. 
    * Being a developer is not about knowing every line of code, off the top of one's head. Being a developer is about understanding the standard structure of code, seeing patterns, which one can then leverage to build a code base. 
    * I'm happy to explain and work-through any line of code inside my projects. I'm also ok with knowing that I don't know every aspect of the Google Maps API. What I do know, is how to travers documentation and other resources to get the job done.

### Todos ###

* Add the ability to have a host account
* Improve styling throughout application.
* Add profile pictures for users

### Software Engineer ###

* [Nathaniel Cooke](https://github.com/nathanieldcooke)
