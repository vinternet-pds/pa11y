# Constants
REPORTS_FOLDER=reports

test:
	@mkdir -p $(REPORTS_FOLDER)
	@rm -rf $(REPORTS_FOLDER)/*
	@node pa11y.js
