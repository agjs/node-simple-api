var loggedInUser = {};

var homePage = `
        <div class="row">
        <div class="container">
            <div class="jumbotron">
                <h1>Bootstrap Tutorial</h1>
                <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
            </div>

            <div class="col-md-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ea, sit dolor quos beatae corrupti laudantium molestiae autem, iste obcaecati provident rem, vero maiores aliquam!
            </div>

            <div class="col-md-4">
                <ul id="users-list" class="list-group"></ul>
            </div>
        </div>
    </div>

`;

var loginPage = `
    <div class="container">
        <div class="row" style="margin-top:20px">
            <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <form id="login" role="form" action="/login" method="post">
                    <fieldset>
                        <h2>Please Sign In</h2>
                        <hr class="colorgraph">
                        <div class="form-group">
                            <input type="text" name="username" id="username" class="form-control input-lg" placeholder="Type in your username">
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password">
                        </div>
                        <span class="button-checkbox">
					<button type="button" class="btn" data-color="info">Remember Me</button>
                    <input type="checkbox" name="remember_me" id="remember_me" checked="checked" class="hidden">
					<a href="" class="btn btn-link pull-right">Forgot Password?</a>
				</span>
                        <hr class="colorgraph">
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <input type="submit" class="btn btn-lg btn-success btn-block" value="Sign In">
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <a href="" class="btn btn-lg btn-primary btn-block">Register</a>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
`;

var usersPage = `

    <ul id="usersPage">
      HERE IS WHERE WE LEFT OFF
    </ul>

`;

function init() {

    $('#top-menu').on('click', 'li a', function() {

        if ($(this).text() === 'Login') {
            window.location.hash = 'login';
            renderPage(loginPage);
        } else if ($(this).text() === 'Home') {
            window.location.hash = 'home';
            renderPage(homePage)
        }

    });





};

function renderPage(page) {

    $('#mainView').html(page);

    if ($('container').find($('#login'))) {
        $('#login').on('submit', function(event) {
            event.preventDefault();

            $.ajax({
                url: '/login',
                type: 'POST',
                data: {
                    username: $('#username').val(),
                    password: $('#password').val()
                },
                success: function(data) {
                    loggedInUser = data;
                    console.log('cool', loggedInUser);
                    window.location.hash = 'profile'
                }
            })

        });
    }

}

init();