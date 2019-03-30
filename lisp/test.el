;; This buffer is for text that is not saved, and for Lisp evaluation.
;; To create a file, visit it with C-x C-f and enter text in its buffer.
(setq my-name "Bastien")


(defun hello(name)(insert "hello " name))

(hello "jxiia")

hello jxiia

(progn
  (switch-to-buffer-other-window "*test*")
  (hello "you"))


(progn
  (switch-to-buffer-other-window "*test*")
  (erase-buffer)
  (hello "there"))


(progn
  (switch-to-buffer-other-window "*test*")
  (erase-buffer)
  (hello "you")
  (other-window 1))

(let ((local-name "yu"))
  (switch-to-buffer-other-window "*test*")
  (erase-buffer)
  (hello local-name)
  (other-window 1))

(format "hello %s!\n" "visiter")

(defun hello (name)
  (insert (format "hello %s!\n" name)))

(hello "opp")hello opp!

(defun greeting(name)
  (let ((your-name "ddoonngg"))
    (insert (format "hello %s!\n\nI am %s."
		    name your-name
		    ))))
(greeting "you")
hello you!

I am ddoonngg.

(read-from-minibuffer "Enter your name: ")


(defun greeting(from-name)
  (let ((your-name (read-from-minibuffer "Enter your name: ")))
    (insert (format "hello!\n\nI am %s and you are %s."
		    from-name your-name
		    ))))
(greeting "ui")hello!

I am ui and you are

(defun greeting(from-name)
  (let ((your-name (read-from-minibuffer "Enter your name: ")))
    (switch-to-buffer-other-window "*test*")
    (erase-buffer)
    (insert (format "hello %s!\n\nI am %s."  your-name from-name))
    (other-window 1)))
(greeting "BBA")

(setq list-of-names '("Sarah" "Chloe" "Mathilde"))
(car list-of-names)
(cdr list-of-names)

(push "Stephanie" list-of-names)

(mapcar 'hello list-of-names)hello Stephanie!
hello Sarah!
hello Chloe!
hello Mathilde!

(defun greeting()
  (switch-to-buffer-other-window "*test*")
  (erase-buffer)
  (mapcar 'hello list-of-names)
  (other-windows 1))

(greeting)

(defun replace-hello-by-bonjour()
  (switch-to-buffer-other-window "*test*")
  (goto-char(point-min))
  (while (search-forward "hello")
    (replace-match "Bonjour"))
  (other-window 1))

(replace-hello-by-bonjour)

(defun hello-to-bonjour()
  (switch-to-buffer-other-window "*test*")
  (erase-buffer)
  (mapcar 'hello list-of-names)
  (goto-char(point-min))
  (while (search-forward "hello" nil t)
    (replace-match "Bonjour"))
  (other-window 1))

(hello-to-bonjour)


(defun boldify-names()
  (switch-to-buffer-other-window "*test*")
  (mapcar 'hello list-of-names)
  (goto-char(point-min))
  (while (re-search-forward "Bonjour \\(.+\\)!" nil t)
    (add-text-properties(match-beginning 1)
			(match-end 1)
			(list 'face 'bold)))
  (other-window 1))

(boldify-names)
