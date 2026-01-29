let currentUser = null;
let projects = [];

const routes = {
    '/': renderHomePage,
    '/login': renderLoginPage,
    '/register': renderRegisterPage,
    '/dashboard': renderDashboard
};

function navigate(path) {
    window.history.pushState({}, '', path);
    router();
}

function router() {
    const path = window.location.pathname;
    const renderFunction = routes[path] || routes['/'];
    renderFunction();
}

window.addEventListener('popstate', router);

function renderHomePage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <header class="header">
            <div class="header-content">
                <a href="/" class="logo" onclick="navigate('/'); return false;">WebApp</a>
                <nav class="nav">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="/login" onclick="navigate('/login'); return false;">Login</a>
                    <a href="/register" onclick="navigate('/register'); return false;" class="btn btn-primary" style="padding: 0.5rem 1.5rem;">Sign Up</a>
                </nav>
            </div>
        </header>
        
        <section class="hero">
            <h1>Build Something Amazing</h1>
            <p>The ultimate platform for managing your projects and growing your business</p>
            <div class="cta-buttons">
                <a href="/register" onclick="navigate('/register'); return false;" class="btn btn-primary">Get Started</a>
                <a href="#features" class="btn btn-secondary">Learn More</a>
            </div>
        </section>
        
        <section id="features" class="features">
            <h2>Powerful Features</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🚀</div>
                    <h3>Fast & Efficient</h3>
                    <p>Lightning-fast performance with optimized code and best practices</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <h3>Secure</h3>
                    <p>Enterprise-grade security to keep your data safe and protected</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Analytics</h3>
                    <p>Comprehensive analytics and reporting to track your progress</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎨</div>
                    <h3>Customizable</h3>
                    <p>Fully customizable interface to match your brand and workflow</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🌐</div>
                    <h3>Global</h3>
                    <p>Access your work from anywhere with cloud-based infrastructure</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💬</div>
                    <h3>Support</h3>
                    <p>24/7 customer support to help you succeed</p>
                </div>
            </div>
        </section>
        
        <section id="pricing" class="pricing">
            <h2>Simple Pricing</h2>
            <div class="pricing-grid">
                <div class="pricing-card">
                    <h3>Starter</h3>
                    <div class="price">$9<span style="font-size: 1rem; color: var(--text-secondary);">/mo</span></div>
                    <ul class="pricing-features">
                        <li>✓ Up to 5 projects</li>
                        <li>✓ Basic analytics</li>
                        <li>✓ Email support</li>
                        <li>✓ 10GB storage</li>
                    </ul>
                    <a href="/register" onclick="navigate('/register'); return false;" class="btn btn-secondary">Get Started</a>
                </div>
                <div class="pricing-card featured">
                    <h3>Professional</h3>
                    <div class="price">$29<span style="font-size: 1rem; color: var(--text-secondary);">/mo</span></div>
                    <ul class="pricing-features">
                        <li>✓ Unlimited projects</li>
                        <li>✓ Advanced analytics</li>
                        <li>✓ Priority support</li>
                        <li>✓ 100GB storage</li>
                    </ul>
                    <a href="/register" onclick="navigate('/register'); return false;" class="btn btn-primary">Get Started</a>
                </div>
                <div class="pricing-card">
                    <h3>Enterprise</h3>
                    <div class="price">$99<span style="font-size: 1rem; color: var(--text-secondary);">/mo</span></div>
                    <ul class="pricing-features">
                        <li>✓ Everything in Pro</li>
                        <li>✓ Custom integrations</li>
                        <li>✓ Dedicated support</li>
                        <li>✓ Unlimited storage</li>
                    </ul>
                    <a href="/register" onclick="navigate('/register'); return false;" class="btn btn-secondary">Contact Us</a>
                </div>
            </div>
        </section>
        
        <footer class="footer">
            <p>&copy; 2024 WebApp. All rights reserved.</p>
        </footer>
    `;
}

function renderLoginPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="form-container">
            <div class="form-card">
                <h2>Welcome Back</h2>
                <div id="login-message"></div>
                <form id="login-form">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="you@example.com">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required placeholder="••••••••">
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Sign In</button>
                    </div>
                    <div class="form-link">
                        <a href="#" id="forgot-password">Forgot password?</a>
                    </div>
                    <div class="form-link">
                        Don't have an account? <a href="/register" onclick="navigate('/register'); return false;">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('forgot-password').addEventListener('click', (e) => {
        e.preventDefault();
        showMessage('Password reset link sent to your email', 'success');
    });
}

function renderRegisterPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="form-container">
            <div class="form-card">
                <h2>Create Account</h2>
                <div id="register-message"></div>
                <form id="register-form">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required placeholder="John Doe">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="you@example.com">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required placeholder="••••••••" minlength="6">
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" required placeholder="••••••••">
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Create Account</button>
                    </div>
                    <div class="form-link">
                        Already have an account? <a href="/login" onclick="navigate('/login'); return false;">Sign in</a>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.getElementById('register-form').addEventListener('submit', handleRegister);
}

function renderDashboard() {
    if (!currentUser) {
        navigate('/login');
        return;
    }

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="dashboard">
            <aside class="sidebar">
                <div class="sidebar-logo">WebApp</div>
                <ul class="sidebar-nav">
                    <li><a href="/dashboard" class="active" onclick="navigate('/dashboard'); return false;">Dashboard</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#" id="logout-btn">Logout</a></li>
                </ul>
            </aside>
            <main class="main-content">
                <div class="dashboard-header">
                    <h1>Dashboard</h1>
                    <button class="btn btn-primary" id="create-project-btn">+ New Project</button>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3>Total Projects</h3>
                        <div class="value">${projects.length}</div>
                    </div>
                    <div class="stat-card">
                        <h3>Active</h3>
                        <div class="value">${projects.filter(p => p.status === 'active').length}</div>
                    </div>
                    <div class="stat-card">
                        <h3>Completed</h3>
                        <div class="value">${projects.filter(p => p.status === 'completed').length}</div>
                    </div>
                    <div class="stat-card">
                        <h3>Team Members</h3>
                        <div class="value">5</div>
                    </div>
                </div>
                
                <div class="project-list">
                    <h2>Recent Projects</h2>
                    <div id="projects-container">
                        ${renderProjects()}
                    </div>
                </div>
            </main>
        </div>
    `;

    document.getElementById('logout-btn').addEventListener('click', handleLogout);
    document.getElementById('create-project-btn').addEventListener('click', handleCreateProject);
}

function renderProjects() {
    if (projects.length === 0) {
        return '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">No projects yet. Create your first project!</p>';
    }
    
    return projects.map(project => `
        <div class="project-item">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            </div>
            <span class="project-status ${project.status}">${project.status}</span>
        </div>
    `).join('');
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        currentUser = { email, name: email.split('@')[0] };
        showMessage('Login successful!', 'success');
        setTimeout(() => navigate('/dashboard'), 1000);
    } catch (error) {
        showMessage('Invalid credentials. Please try again.', 'error');
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }

    try {
        currentUser = { email, name };
        showMessage('Account created successfully!', 'success');
        setTimeout(() => navigate('/dashboard'), 1000);
    } catch (error) {
        showMessage('Registration failed. Please try again.', 'error');
    }
}

function handleLogout(e) {
    e.preventDefault();
    currentUser = null;
    projects = [];
    navigate('/login');
}

function handleCreateProject() {
    const projectName = prompt('Enter project name:');
    if (projectName) {
        const newProject = {
            id: Date.now(),
            name: projectName,
            description: 'New project description',
            status: 'active'
        };
        projects.push(newProject);
        renderDashboard();
    }
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('login-message') || document.getElementById('register-message');
    if (messageDiv) {
        messageDiv.innerHTML = `<div class="${type}">${message}</div>`;
    }
}

window.navigate = navigate;

document.addEventListener('DOMContentLoaded', () => {
    router();
});