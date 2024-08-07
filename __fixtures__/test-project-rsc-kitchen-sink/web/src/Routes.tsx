// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route } from '@redwoodjs/router/dist/Route'
import { Set, PrivateSet } from '@redwoodjs/router/dist/Set'
import { Router } from '@redwoodjs/vite/Router'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import NavigationLayout from './layouts/NavigationLayout/NavigationLayout'
import ScaffoldLayout from './layouts/ScaffoldLayout/ScaffoldLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={NavigationLayout} rnd={0.7}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/multi-cell" page={MultiCellPage} name="multiCell" />

        <Set wrap={AuthLayout}>
          <Route path="/login" page={LoginPage} name="login" />
          <Route path="/signup" page={SignupPage} name="signup" />
          <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
          <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
          <PrivateSet unauthenticated="login">
            <Route path="/profile" page={ProfilePage} name="profile" />
          </PrivateSet>
        </Set>

        <Set wrap={ScaffoldLayout} title="EmptyUsers" titleTo="emptyUsers" buttonLabel="New EmptyUser" buttonTo="newEmptyUser">
          <Route path="/empty-users/new" page={EmptyUserNewEmptyUserPage} name="newEmptyUser" />
          <Route path="/empty-users/{id:Int}/edit" page={EmptyUserEditEmptyUserPage} name="editEmptyUser" />
          <Route path="/empty-users/{id:Int}" page={EmptyUserEmptyUserPage} name="emptyUser" />
          <Route path="/empty-users" page={EmptyUserEmptyUsersPage} name="emptyUsers" />
        </Set>

        <Set wrap={ScaffoldLayout} title="UserExamples" titleTo="userExamples" buttonLabel="New UserExample" buttonTo="newUserExample">
          <Route path="/user-examples/new" page={UserExampleNewUserExamplePage} name="newUserExample" />
          <Route path="/user-examples/{id:Int}/edit" page={UserExampleEditUserExamplePage} name="editUserExample" />
          <Route path="/user-examples/{id:Int}" page={UserExampleUserExamplePage} name="userExample" />
          <Route path="/user-examples" page={UserExampleUserExamplesPage} name="userExamples" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
