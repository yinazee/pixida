# pixida
It is a registration app for a receptionist at a jewelry repair shop to use when logging in customers.
Once an order is entered it enters the Queue phase and waits for a representative to claim them.
Once the job is done, the representative clicks on the finished button and the order enters the Finished phase.

After cloning:
1) Run 'rake db migrate'
2) Run 'rake db seed'
3) Run 'gem install rb-readline' in the terminal so you can use 'rails console'
4) If 'npm start' doesn't work, run 'nvm install node' in the terminal
5) If there's a version error run 'rvm install ruby-2.5.1' in the terminal

