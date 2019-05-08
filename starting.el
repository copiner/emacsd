;; This buffer is for text that is not saved, and for Lisp evaluation.
;; To create a file, visit it with C-x C-f and enter text in its buffer.

;; The scratch buffer is the default buffer when opening Emacs.
;; You are never editing files: you are editing buffers that you
;; can save to a file.

;; atom
;;symbolic expressions
(+ 2 2)
(+ 2 (+ 1 1))
;;c-j insert the result of the evaluation in the buffer
;;c-x c-e displayed in the mini-buffer


;;`setq` stores a value into a variable:
(setq miname "latna")

(insert "hello")

(insert "hello " miname)

;;function
(defun hello(name) (insert "hello " name))
(hello "lutana")

(switch-to-buffer-other-window "*test*")

;;you can combine several sexps with `progn`:
(progn
  (switch-to-buffer-other-window "*test*")
  (hello "you"))

(progn
  (switch-to-buffer-other-window "*test*")
  (erase-buffer)
  (hello "there"))

;;you can bind a value to a local variable with `let`:
(let ((local-name "ant"))
  (switch-to-buffer-other-window "*test*")
  (erase-buffer)
  (hello local-name)
  (other-window 1))



