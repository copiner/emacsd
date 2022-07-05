(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(ansi-color-faces-vector
   [default default default italic underline success warning error])
 '(custom-enabled-themes '(tango-dark))
 '(package-selected-packages
   '(cdlatex auctex go-complete go-autocomplete go-mode neotree company)))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
(add-to-list 'package-archives
             '("melpa" . "http://melpa.org/packages/"))
;;env
(setenv "PATH"
	(concat "/usr/local/bin" ":"
		"/usr/local/go/bin" ":"
		"/usr/local/texlive/2022basic/bin/universal-darwin" ":"				
	(getenv "PATH")   
		       ))

;;neotree
(add-to-list 'load-path "~/.emacs.d/elpa/neotree/")
(require 'neotree)
(global-set-key [(meta tab)] 'neotree-toggle)

;;backup
(setq make-backup-files nil)

(global-set-key [(control tab)] 'other-window)

(electric-pair-mode 1)

;;tab
;;(setq default-tab-width 4)
;;(setq indent-tabs-mode nil)
(setq-default indent-tabs-mode nil)
(setq-default tab-width 4)
(setq indent-line-function 'insert-tab)


;;company
(add-hook 'after-init-hook 'global-company-mode)

;;org
(setq org-agenda-files '("~/certs/dream/org"))

;;org-mode
(global-set-key (kbd "C-c l") #'org-store-link)
(global-set-key (kbd "C-c a") #'org-agenda)
(global-set-key (kbd "C-c c") #'org-capture)

;;latex
(unless (boundp 'org-latex-classes)
  (setq org-latex-classes nil))

(add-to-list 'org-latex-classes
             '("article"
               "\\documentclass[11pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{graphicx}
\\usepackage{longtable}
\\usepackage{wrapfig}
\\usepackage{rotating}
\\usepackage[normalem]{ulem}
\\usepackage{amsmath}
\\usepackage{textcomp}
\\usepackage{amssymb}
\\usepackage{hyperref}
\\tolerance=1000
      [NO-DEFAULT-PACKAGES]
      [PACKAGES]
      [EXTRA]
\\hypersetup{pdfborder=0 0 0}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")))
